<template>
  <div class="h-full grid grid-cols-2">
    <form class="container flex flex-col items-center justify-center gap-4" @submit="onSubmit">
      <img src="https://res.cloudinary.com/tefanhaetami/image/upload/v1701589841/nuxt-starter/qn6thrcaf3hyi6j5medt.svg" />
      <FormField v-slot="{ componentField }" name="username">
        <FormItem class=" w-3/6">
          <div class="flex flex-row gap-2">
            <FormLabel>
              Username
            </FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Input type="text" placeholder="type here.." v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem class=" w-3/6">
          <div class="flex flex-row gap-2">
            <FormLabel>
              Password
            </FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Input type="password" placeholder="type here.." v-bind="componentField" />
          </FormControl>
        </FormItem>
      </FormField>

      <div class="w-3/6" align="end">
        <Button type="submit">
          Submit
        </Button>
      </div>
    </form>
    <div>
      <img src="https://res.cloudinary.com/tefanhaetami/image/upload/v1701587853/nuxt-starter/beddsyph3sjeyji1tqqf.svg" class="h-full w-full object-cover" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})

setPageLayout('fullscreen')
</script>
