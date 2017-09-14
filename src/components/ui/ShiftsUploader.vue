<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 offset-sm3>
        <v-card class="lime">
          <v-layout>
            <v-flex xs8 offset-sm2>
                  <div class="uploader-action">
                    <div class="dz-message">
                      Click here or drag and drop CSV file
                      <input accept=".csv" type="file" class="hide_file" @change="parseFile($event)">
                    </div>
                  </div>
                    <div class="text-xs-center">
                      <v-chip @input="onChipClose()" close v-model="chip" outline class="green green--text">{{ csvName }}</v-chip>
                    </div>
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

export default {
  data () {
    return {
      loader: null,
      loading: false,
      chip: false,
      csv: [],
      csvName: ''
    }
  },
  methods: {
    parseFile (event) {
      const file = event.target.files[0]
      this.$data.csvName = file.name
      this.$data.chip = true
      const reader = new FileReader()
      reader.onload = e => {
        parse(reader.result, (err, data) => {
          if (err) {
            console.error(err)
          } else {
            const headers = data[0]
            let shift = {}
            for (let x = 1; x < data.length; x++) {
              for (let y = 0; y < data[0].length; y++) {
                shift[headers[y]] = data[x][y]
              }
              this.$data.csv.push(shift)
            }
          }
        })
      }
      reader.onerror = error => { console.error(error) }
      reader.readAsText(file)
    },
    onChipClose () {
      this.$data.csv = []
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
.uploader-action {
  padding: 30px;
  background: #f1f5ff;
  cursor: pointer;
  height: 200px;
  max-width: 400px;
}

.uploader-action .dz-message {
  color: #94a7c2;
  text-align: center;
  padding: 40px 40px;
  border: 3px dashed #dfe8fe;
  border-radius: 4px;
  font-size: 16px;
}

.hide_file {
    position: absolute;
    z-index: 1000;
    opacity: 0;
    cursor: pointer;
    right: 0;
    top: 0;
    height: 200px;
    font-size: 24px;
    max-width: 400px;
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