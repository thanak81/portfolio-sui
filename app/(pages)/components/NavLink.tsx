import Link from 'next/link'
import React from 'react'

type Props = {}

function NavLink({}: Props) {
    const navData = [
        {
            id: 1,
            title: "Overview",
            link: "/"
        },
        {
            id: 2,
            title: "Projects",
            link: "projects"
        },
        {
            id: 3,
            title: "Contact",
            link: "contacts"
        }
    ]
  return (
    <section className='flex gap-4 flex-col'>
        {
            navData.map((nav) => (
                <ul key={nav.id} className='text-sm'>
                    <li>
                        <Link href={nav.link}>
                            {nav.title}
                        </Link>
                    </li>
                </ul>
            ))
        }
    </section>
  )
}

export default NavLink