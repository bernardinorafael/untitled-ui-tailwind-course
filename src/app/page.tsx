import { Mail, UploadCloud, User } from 'lucide-react'

import * as FileInput from '@/app/components/form/file-input'
import * as Input from '@/app/components/input'

import { Select } from './components/form/select'
import { SettingsTabs } from './components/settings-tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <section className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              Personal info
            </h2>

            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </section>

          <section className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </section>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label className="text-sm font-medium text-zinc-700" htmlFor="name">
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="name" defaultValue="Rafael" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Bernardino" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="email">
              E-mail address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="text-zinc-700" size={18} strokeWidth={1.8} />
              </Input.Prefix>

              <Input.Control
                type="email"
                id="email"
                defaultValue="rafael@sparktech.ao"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />

              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>

            <Input.Root>
              <Input.Control
                type="text"
                id="role"
                defaultValue="Front-end engineer"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="country">
              Country
            </label>
            <Select />

            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="timezone">
              Timezone
            </label>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-3">
              <FileInput.Trigger />
              <FileInput.FileList />

              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-4">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
