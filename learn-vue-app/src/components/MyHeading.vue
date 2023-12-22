<script lang="ts">

import { h } from 'vue';

const MyHeading = (props, context) => {
  const heading = `h${props.level}`

  return h(heading, context.attrs, context.slots);
}

MyHeading.props = {
  level: {
    type: String,
    required: true
  },
}

export default MyHeading

</script>