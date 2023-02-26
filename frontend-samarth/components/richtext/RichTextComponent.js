import Image from "next/image"
import Link from "next/link"
import urlFor from "@/lib/urlFor"

 const RichTextComponent = {
    types: {
        image: ({ value }) => {
          if (!value?.asset?._ref) {
            return null
          }
          return (
            <Image width={320} height={240}
              alt={value.alt || ' '}
              loading="lazy"
              src={urlFor(value).width(320).height(240).fit('max').auto('format').url()}
            />
          )
        }
      },
      marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
    
        // Ex. 2: rendering a custom `link` annotation
        link: ({value, children}) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
          return (
            <Link href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
              {children}
            </Link>
          )
        },
      },
      block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-5xl font-bold">{children}</h1>,
        h2: ({children}) => <h2 className="text-4xl font-bold text-slate-700 py-10">{children}</h2>,
        h3: ({children}) => <h3 className="text-3xl font-bold text-slate-700 py-8">{children}</h3>,
        h4: ({children}) => <h4 className="text-2xl font-bold text-slate-700 py-2">{children}</h4>,
        p: ({children}) => <p className="text-gray-400">{children}</p>,
        blockquote: ({children}) => <blockquote className="border-l-teal-500 border-l-2 pl-5 my-5">{children}</blockquote>,
    
        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
          <h2 className="text-lg text-primary text-slate-700">{children}</h2>,
          <p className="text-gray-400">{children}</p>
        ),
      },
      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="ml-10 py-4 list-disc space-y-5 text-slate-600">{children}</ul>,
        number: ({children}) => <ol className="mt-10 list-decimal">{children}</ol>,
    
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
      },
      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li>{children}</li>,
    
        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
      },
}
export default RichTextComponent