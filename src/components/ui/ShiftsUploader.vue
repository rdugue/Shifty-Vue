<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 offset-sm3>
        <v-card class="lime">
          <v-layout>
            <v-flex xs8 offset-sm2>
              <vue-clip :options="options" :on-added-file="addedFile" class="uploader">
                <template slot="clip-uploader-action">
                  <div class="uploader-action">
                    <div class="dz-message">
                      Click here or drag and drop CSV file
                    </div>
                  </div>
                </template>
                <template slot="clip-uploader-body" scope="props">
                  <div v-for="file in props.files" class="uploader-files">
                    <div class="text-xs-center">
                      <v-chip close v-model="chip" outline class="green green--text">{{ file.name }}</v-chip>
                    </div>
                  </div>
                </template>
              </vue-clip>
            </v-flex>
          </v-layout>
          <v-btn :loading="loading" :disabled="loading" @click.native="loader = 'loading'">
            upload
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as parse from 'csv-parse'
const s3 = 'https://shifty-csv-upload.s3.amazonaws.com'

export default {
  data () {
    return {
      options: {
        url: s3,
        maxFiles: 1,
        acceptedFiles: {
          extensions: ['text/csv'],
          message: 'Please only upload .csv files'
        }
      },
      loader: null,
      loading: false,
      chip: true,
      csv: []
    }
  },
  methods: {
    addedFile (file) {
      const headers = new Headers({})
      const init = {
        headers: headers,
        method: 'GET',
        mode: 'cors'
      }
      fetch(`${s3}/${file.name}`, init)
      .then(response => {
        const parser = parse({ delimiter: ':' })
        parser.on('readable', () => {
          let shift = parser.read()
          while (shift) {
            this.$data.csv.push(shift)
            shift = parser.read()
          }
        })
        parser.on('error', error => { console.log(error.message) })
        parser.on('finish', () => { console.log(this.$data.csv) })
      })
      .catch(reason => { console.log(reason) })
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>

<style>
.uploader {
  max-width: 400px;
  height: 200px;
  display: flex;
  border-radius: 6px;
  box-shadow: 1px 2px 19px rgba(195, 195, 195, 0.43);
  flex-direction: column-reverse;
  background: #fff;
}

.uploader * {
  box-sizing: border-box;
}

.uploader-action {
  padding: 20px;
  background: #f1f5ff;
  cursor: pointer;
}

.uploader-action .dz-message {
  color: #94a7c2;
  text-align: center;
  padding: 20px 40px;
  border: 3px dashed #dfe8fe;
  border-radius: 4px;
  font-size: 16px;
}

.uploader-files {
  flex: 1;
  padding: 15px 10px 0px 10px;
  font-size: 16px;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>