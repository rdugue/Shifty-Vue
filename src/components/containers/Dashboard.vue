<template>
  <div>
    <shift-form></shift-form>
    <week></week>
  </div>
</template>
<script>
import ShiftForm from '../ui/ShiftForm'
import Week from './Week'

export default {
  components: {
    'shift-form': ShiftForm,
    'week': Week
  }
}
</script>
