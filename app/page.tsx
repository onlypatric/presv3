"use client"
import Link from "next/link"

import * as React from "react"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Badge, BadgeProps, badgeVariants } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardTitle, CardDescription, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
const avatar: String = "https://github.com/onlypatric.png"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const calculateAgeInYears = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  return currentDate.getFullYear() - birthDate.getFullYear() - (
    (currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) ? 1 : 0
  );
};
export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Pintescul Patric <br className="hidden sm:inline" />
          Web & iOS developer.
        </h1>
        <div className="flex gap-4 flex-wrap max-w-[600px]">
          <Badge variant="default">React and NextJS</Badge>
          <Badge variant="destructive">SwiftUI</Badge>
          <Badge variant="default">Python and data science</Badge>
          <Badge variant="secondary">C++ game developement</Badge>
          <Badge variant="secondary">Java backend</Badge>
          <Badge variant="secondary">Javascript express</Badge>
          <Badge variant="destructive">AWS expert</Badge>
        </div>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I&#39;m a software developer specialized in building Web and iOS apps.
        </p>
      </div>
      <Separator />


      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        About me
      </h2>
      <p className="max-w-[700px] text-lg text-accent-foreground">
        Hello, I&#39;m Patric Pintescul, a {calculateAgeInYears('11/29/2006')}-year-old developer hailing from Italy. My journey in the world of programming began early, and over the past few years, I&#39;ve dived into various realms of development
      </p>
      <p className="max-w-[700px] text-lg text-accent-foreground">
        On the web and iOS front, I&#39;ve been crafting digital experiences for around 4 years, specializing in technologies like React for 3 years, Next.js for 2 years, and mastering tools like Tailwind and Babel along the way. Recently, I&#39;ve also delved into the realm of iOS development, contributing my skills for approximately a year.
      </p>
      <p className="max-w-[700px] text-lg text-accent-foreground">
        My coding adventures extend beyond the realms of web and iOS. I&#39;ve spent considerable time in the domains of data science and AI using Python, accumulating 5 years of experience in data science and 2 years in AI development. Not to forget, I&#39;ve dedicated 4 years to crafting intuitive desktop GUI apps.
      </p>
      <p className="max-w-[700px] text-lg text-accent-foreground">
        Looking ahead, I have ambitious plans to broaden my expertise. Currently eyeing .NET and C# for game development, I come with a foundation in C++ game development, boasting around a year of experience in this exciting field.
      </p>
      <p className="max-w-[700px] text-lg text-accent-foreground">
        Join me as I embark on my coding odyssey, exploring new horizons and turning ideas into lines of code that make a difference.
      </p>
      <Separator></Separator>
      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Notable projects
      </h2>
      <div className="m-auto">
        <Carousel className="w-full max-w-[85vw] text-wrap">
          <CarouselContent>
            <CarouselItem key={1}>
              <div className="p-1">
                <Card className="min-w-[300px] min-h-[100px]">
                  <CardHeader>
                    <CardTitle>Form builder</CardTitle>
                    <CardDescription>Built for <span className="text-emerald-600">javax.swing</span></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>using <span className="text-purple-500">python and Qt6</span></p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://github.com/onlypatric/swinpy" target="_blank">
                      <Button>Go to project</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={2}>
              <div className="p-1">
                <Card className="min-w-[300px] min-h-[100px]">
                  <CardHeader>
                    <CardTitle>Instagram manager</CardTitle>
                    <CardDescription>Built for <span className="text-emerald-600">instagram</span></CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <p>using <span className="text-purple-500">python and requests</span></p>
                  </CardContent>
                  <CardFooter>
                    This project is closed source, you may buy a license of use through me, I&#39;m planning to release an open source version soon.
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={3}>
              <div className="p-1">
                <Card className="min-w-[300px] min-h-[100px]">
                  <CardHeader>
                    <CardTitle>License manager</CardTitle>
                    <CardDescription>Built for <span className="text-emerald-600">anything</span></CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <p>using <span className="text-purple-500">nodejs</span>, <span className="text-purple-500">express</span>, <span className="text-purple-500">secure encryption (sha256)</span></p>
                  </CardContent>
                  <CardFooter>
                    <p>This project is closed source, you may contact through email or phone and request a more in depth explanation on how it works.</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <Separator></Separator>
      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Previous experiences
      </h2>
      <p className="max-w-[700px] text-lg text-accent-foreground">
        In my professional journey, I&#39;ve had the privilege of immersing myself in diverse and dynamic work environments, where each experience has been a stepping stone in my evolution as a developer. From contributing to innovative projects to collaborating within talented teams.<br></br> I&#39;ve cultivated a passion for problem-solving and a keen eye for detail. My journey has not only honed my technical skills but also instilled in me a deep appreciation for the collaborative nature of software development. As I navigate the ever-evolving landscape of technology, I bring with me a wealth of hands-on experience and a commitment to delivering solutions that not only meet but exceed expectations.
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Freelance work</AccordionTrigger>
          <AccordionContent>
            I&#39;ve done around 3 years of freelancing jobs, this has taught me to deliver services as fast as possible while keeping a high quality standard
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>First remote job</AccordionTrigger>
          <AccordionContent>
            I&#39;ve worked in a small company as a remote member in charge of documentation and backend developement, this has taught me to write as safe as possible code and make it as efficent as possible, unfortunately the company closed after one month, yet I had the chance to get some experience working with a team.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Open source contributions</AccordionTrigger>
          <AccordionContent>
            I have been contributing to many open source projects, i had the chance to get in touch with the developers of the Linux kernel, this has taught me to work as a team and not by myself, I learned to write code that was at the required standard and format in order to be approved.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Courses & awards
      </h2>
      <Carousel className="w-[300px] m-auto">
        <CarouselContent>
          <CarouselItem key={1}>
            <div className="p-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>AI Course</CardTitle>
                </CardHeader>
                <CardFooter>
                  <CardDescription>From <span className="text-emerald-600">Google</span></CardDescription>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={2}>
            <div className="p-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Web design & frameworks</CardTitle>
                  <CardDescription>From <Link href="https://meta.com"><span className="text-emerald-600">meta</span></Link></CardDescription>
                </CardHeader>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={3}>
            <div className="p-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>SwiftUI bootcamp</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>




      <Separator />
      <div>
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Thank you!
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I hope to get a hold of you, write me an email or <a href="#" className="font-medium text-primary underline underline-offset-4">ask me anything!</a>
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          I&#39;m open to freelance jobs, remote jobs or the chance to learn from your company.
        </blockquote>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Reach me
        </h3>
        <DataTableDemo />
      </div>

    </section>
  )
}
const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "type",
    header: "Contact",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "url",
    header: ({ column }) => {
      return /*(
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sort
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )*/ <></>
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("url")}</div>
  }
]

function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Find..."
          value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("type")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const data: Contact[] = [
  {
    id: "m5gr84i9",
    type: "Email",
    realurl: "mailto:patric.personal99@gmail.com",
    url: "patric.personal99@gmail.com",
  },
  {
    id: "3u1reuv4",
    type: "2nd Email",
    realurl: "mailto:patricpintescul@gmail.com",
    url: "patricpintescul@gmail.com",
  },
  {
    id: "derv1ws0",
    type: "Phone",
    realurl: "tel:+393317704837",
    url: "+39 331 770 4837",
  }
]

type Contact = {
  id: string
  type: string
  realurl: string
  url: string
}
