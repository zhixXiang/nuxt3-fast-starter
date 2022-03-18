<template>
  <h2 class="modal-title">
    <slot name="title"></slot>
  </h2>
  <section>
    <slot name="content"></slot>
  </section>
  <div class="modal-tool">
    <slot name="buttons"></slot>
  </div>
</template>
