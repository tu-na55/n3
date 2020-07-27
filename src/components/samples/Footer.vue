<template lang="pug">
    v-footer(:absolute="!fixed" app)
      //- v-footer(color='indigo', app='')
      span &copy; {{ new Date().getFullYear() }}
      //- span.white--text © System mun
</template>
