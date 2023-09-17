<template>
  <div class="w-10/12 min-w-fit p-3 sm:w-10/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
    <div class="flex h-full flex-col overflow-hidden rounded-lg border border-gray-400">

      <header class="bg-gray-100 p-3">
        <h1 class="text-xl font-semibold">
          <slot name="heading"></slot>
        </h1>
        <i class="text-sm">
          <slot name="subheading"></slot>
        </i>
      </header>

      <div class="border-b border-solid border-gray-400"></div>

      <div class="grow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
