<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cardId = ref<number | null>(null);

onMounted(() => {
  cardId.value = parseInt(route.params.id as string, 10);
  // ดึงข้อมูลการ์ดจากเซิร์ฟเวอร์หรือสถานะของคุณตาม cardId.value
});
const fileRefLogo = ref<HTMLInputElement>()
const fileRefBg = ref<HTMLInputElement>()
const fileRefPost = ref<HTMLInputElement>()
const fileRefShare = ref<HTMLInputElement>()

const selected = ref(false)
const apppublished = ref(false)

const isDeleteAccountModalOpen = ref(false)

const state = reactive({
  name: 'name',
  chanelid: cardId,
  chanelname: 'Chanel Name',
  liffid: '2006157295-Adoy9vwj',
  liffurl: '2006157295-Adoy9vwj',
  channelsecret: 'a17f1786712755a9db2096d383992a5f',
  lineurl: 'https://line.me/@lineoa',
  button_line: 'แชร์ต่อให้ลูกค้า',
  button_url: 'https://line.biz/2006157295-Adoy9vwj',
  username: 'benjamincanac',
  avatar: '',
  logo: '',
  bg: '',
  imagespost: '',
  imagesshare: '',
  description: '',
  password_current: '',
  password_new: ''
})

const toast = useToast()

function validate(state: any): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Please enter your name.' })
  if (!state.channelsecret) errors.push({ path: 'channelsecret', message: 'Please enter your channelsecret.' })
  if ((state.password_current && !state.password_new) || (!state.password_current && state.password_new)) errors.push({ path: 'password', message: 'Please enter a valid password.' })
  return errors
}

function onFileChangeLogo(e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  state.logo = URL.createObjectURL(input.files[0])
}

function onFileChangeBg(e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  state.bg = URL.createObjectURL(input.files[0])
}

function onFileChangePost(e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  state.imagespost = URL.createObjectURL(input.files[0])
}

function onFileChangeShare(e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  state.imagesshare = URL.createObjectURL(input.files[0])
}

function onFileClickLogo() {
  fileRefLogo.value?.click()
}

function onFileClickBg() {
  fileRefBg.value?.click()
}
function onFileClickPost() {
  fileRefPost.value?.click()
}
function onFileClickShare() {
  fileRefShare.value?.click()
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)

  toast.add({ title: 'Profile updated', icon: 'i-heroicons-check-circle' })
}
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection
      title="Create a new channel"
      description="LIFF Share Target Picker. : instantly share code, notes, and snippets."
    >
      <template #links>
        <UColorModeSelect color="gray" />
      </template>
    </UDashboardSection>

    <UDivider class="mb-4" />
    <UForm
      :state="state"
      :validate="validate"
      :validate-on="['submit']"
      @submit="onSubmit"
    >
      <UDashboardSection
        title="บันทึกข้อมูล"
        description="กรุณาตรวจสอบข้อมูลให้เรียบร้อยครบถ้วนก่อนทำการบันทึกข้อมูล."
      >
        <template #links>
          <UButton
            type="submit"
            label="บันทึก"
            color="black"
          />
        </template>

        <UFormGroup
          name="chanelid"
          label="Channel ID "
          description="Unique identifier for the channel"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.chanelid"
            autocomplete="off"
            icon="i-heroicons-viewfinder-circle"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="chanelname"
          label="Channel NAME"
          description="Unique identifier for the name"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.chanelname"
            autocomplete="off"
            icon="i-heroicons-finger-print"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="liffid"
          label="LIFF ID"
          description="Unique identifier for the liff id"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.liffid"
            autocomplete="off"
            icon="i-heroicons-cursor-arrow-rays"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="liffurl"
          label="LIFF URL"
          description="Unique identifier for the liff url"
          required
          class="grid grid-cols-2 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.liffurl"
            type="username"
            autocomplete="off"
            size="md"
            input-class="ps-[77px]"
          >
            <template #leading>
              <span class="text-gray-500 dark:text-gray-400 text-sm">line.biz/</span>
            </template>
          </UInput>
        </UFormGroup>

        <UFormGroup
          name="channelsecret"
          label="Channel secret"
          description="A unique secret key you can use to grant an app access to your channel."
          required
          class="grid grid-cols-2 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.channelsecret"
            type="channelsecret"
            autocomplete="off"
            icon="i-heroicons-envelope"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="lineurl"
          label="LINE URL"
          description="ลิ้งนำทาง LINE บริการลูกค้า"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.lineurl"
            autocomplete="off"
            icon="i-heroicons-shield-check"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="button_line"
          label="ชื่อปุ่ม Button 1"
          description="ชื่อปุ่มที่ต้องการให้ User กดเข้าไป"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.button_line"
            autocomplete="off"
            icon="i-heroicons-receipt-refund"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="button_url"
          label="ลิ้งนำทาง Button URL"
          description="ลิ้งนำทางปุ่มที่ต้องการให้ User กดเข้าไป"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.button_url"
            autocomplete="off"
            icon="i-heroicons-device-tablet"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="logo"
          description="อัพโหลดโลโก้รูป ขนาด 200x200 พิกเซล ขนาดไฟล์ไม่เกิน1MB."
          label="โลโก้ แบรนด์ ที่ปรากฏบนหน้าเว็บ"
          class="grid grid-cols-2 gap-2"
          help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
          <UAvatar
            :src="state.logo"
            :alt="state.name"
            size="lg"
          />

          <UButton
            label="Choose"
            color="white"
            size="md"
            @click="onFileClickLogo"
          />

          <input 
            ref="fileRefLogo"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            @change="onFileChangeLogo"
          >
        </UFormGroup>

        <UFormGroup 
          name="bg"
          label="พื้นหลังที่ปรากฎเป็นหน้าเว็บ (ไม่ใส่ก็ได้) [2.1]"
          description="อัพโหลดโลโก้รูป ขนาด 1920x1080 พิกเซล ขนาดไฟล์ไม่เกิน2MB."
          class="grid grid-cols-2 gap-2"
          help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
          <UAvatar
            :src="state.bg"
            :alt="state.name"
            size="lg"
          />

          <UButton
            label="Choose"
            color="white"
            size="md"
            @click="onFileClickBg"
          />

          <input
            ref="fileRefBg"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            @change="onFileChangeBg"
          >
        </UFormGroup>

        <UFormGroup
          name="imagespost"
          label="รูปแสดงบนหน้าเว็บสีเหลียมพื้นผ้าเช่น (โปรโมชั่น)"
          description="อัพโหลดโลโก้รูป ขนาด 768x768 พิกเซล ขนาดไฟล์ไม่เกิน2MB."
          class="grid grid-cols-2 gap-2"
          help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
          <UAvatar
            :src="state.imagespost"
            :alt="state.name"
            size="lg"
          />

          <UButton
            label="Choose"
            color="white"
            size="md"
            @click="onFileClickPost"
          />

          <input
            ref="fileRefPost"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            @change="onFileChangePost"
          >
        </UFormGroup>

        <UFormGroup
          name="imagesshare"
          label="รูปแสดงบน Line ตอนแชร์ออกไป"
          description="อัพโหลดโลโก้รูป ขนาด 768x768 พิกเซล ขนาดไฟล์ไม่เกิน2MB."
          class="grid grid-cols-2 gap-2"
          help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
          <UAvatar
            :src="state.imagesshare"
            :alt="state.name"
            size="lg"
          />

          <UButton
            label="Choose"
            color="white"
            size="md"
            @click="onFileClickShare"
          />

          <input
            ref="fileRefShare"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            @change="onFileChangeShare"
          >
        </UFormGroup>

        <UFormGroup
          name="selected"
          label="ปิด/เปิด ภาพพื้นหลัง"
          description="การใช้งานรูปภาพพื้นหลังแบบรูปภาพ [2.1]"
          class="grid grid-cols-2 gap-2"
          help="หากปิดไว้ตั้งค่าเริ่มต้นจะเป็น CODE สีวนลูปเปลี่ยนไปเรื่อยๆ"
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
        <UToggle v-model="selected" />
        </UFormGroup>

        <UFormGroup
          name="apppublished"
          label="ปิด/เปิด เผยแพร่การทำงาน"
          description="หากกดปิดจะไม่สามารถใช้งานลิ้งแชร์กิจกรรมนี้ได้"
          class="grid grid-cols-2 gap-2"
          help="ส่วนตัว/สาธารณะ"
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
        <UToggle v-model="apppublished" />
        </UFormGroup>

        <UFormGroup
          name="description"
          label="รายละเอียด"
          description="Description รายละเอียดอยู่ใต้ปุ่มแชร์."
          class="grid grid-cols-2 gap-2"
          :ui="{ container: '' }"
        >
          <UTextarea
            v-model="state.description"
            :rows="5"
            autoresize
            size="md"
          />
        </UFormGroup>

      </UDashboardSection>
    </UForm>

    <UDivider class="mb-4" />

    <UDashboardSection
      title="หมายเหตุ"
      description="กรุณาตรวจสอบกิจกรรม ทั้งหมดก่อนทำการลบหรือแก้ไขทุกครั้ง."
    >
      <div>
        <UButton
          color="red"
          label="ลบกิจกรรม"
          size="md"
          @click="isDeleteAccountModalOpen = true"
        />
      </div>
    </UDashboardSection>

    <!-- ~/components/settings/DeleteAccountModal.vue -->
    <SettingsDeleteAccountModal v-model="isDeleteAccountModalOpen" />
  </UDashboardPanelContent>
</template>

