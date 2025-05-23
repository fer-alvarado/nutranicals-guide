import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../components/Layout'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'guide.md')
  const source = await fs.readFile(filePath, 'utf8')
  const { content } = matter(source)
  const mdxSource = await serialize(content)

  return { props: { mdxSource } }
}

export default function Home({ mdxSource }) {
  return (
    <Layout>
      <MDXRemote {...mdxSource} />
    </Layout>
  )
}