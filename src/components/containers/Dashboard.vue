<template>
  <div>
    <v-layout>
      <v-flex xs10 offset-sm2>
        <shift-uploader v-if="text === 'upload'"></shift-uploader>
        <shift-form v-if="text === 'form'"></shift-form>
      </v-flex>
      <v-flex xs2>
        <v-btn-toggle v-model="text" class="mt-3 mr-5">
          <v-btn flat value="form">Form</v-btn>
          <v-btn flat value="upload">upload</v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>
    <week></week>
  </div>
</template>
<script>
import ShiftForm from '../ui/ShiftForm'
import ShiftsUploader from '../ui/ShiftsUploader'
import Week from './Week'

export default {
  components: {
    'shift-form': ShiftForm,
    'shift-uploader': ShiftsUploader,
    'week': Week
  },
  data () {
    return {
      text: 'form'
    }
  }
}
</script>
