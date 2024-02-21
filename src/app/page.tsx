import Link from 'next/link'

import { Input, Button } from '@/components/ui'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-white dark:bg-gray-900">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
                  Beautiful Templates for Your Apps
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  High-quality, customizable, and ready-to-use templates for
                  your web and mobile applications. Elevate your user experience
                  with our designs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/assets/images/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        E-commerce
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Beautifully designed components that you can copy and
                        paste into your apps.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        Social Media
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Accessible. Customizable. Open Source.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        Productivity
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Let your team focus on shipping features instead of
                        managing infrastructure with automated CI/CD, built-in
                        testing, and integrated collaboration.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black dark:text-white">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  className="bg-blue-600 text-white dark:bg-blue-400 dark:text-white"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link
                  className="underline underline-offset-2 text-black dark:text-white"
                  href="#"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
