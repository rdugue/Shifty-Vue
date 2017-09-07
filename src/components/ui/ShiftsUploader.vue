<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 offset-sm3>
        <v-card class="lime">
          <vue-clip :options="options" class="uploader">
            <template slot="clip-uploader-action">
              <div class="uploader-action">
                <div class="dz-message">
                  Click here or drag and drop CSV file 
                </div>
              </div>
            </template>
            <template slot="clip-uploader-body" scope="props">
              <div v-for="file in props.files" class="uploader-files">
                {{ file.name }}
              </div>
            </template>
          </vue-clip>
          <v-btn 
            :loading="loading"
            :disabled="loading"
            @click.native="loader = 'loading'">
            upload
            <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      options: {
        url: '/upload',
        maxFiles: 1,
        acceptedFiles: {
          extensions: ['application/csv'],
          message: 'Please only upload .csv files'
        }
      },
      loader: null,
      loading: false
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
    margin-left: 80px;
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
    padding: 40px;
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