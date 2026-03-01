import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'
import { GithubBlog } from '@rena.to/github-blog'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Temuulen Gan - Projects</title>
          <meta content="Temuulen Gan - Projects" name="title" />
          <meta
            content="Portfolio of projects by Temuulen Gan."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://temuulengan.github.io/personal-web/projects" property="og:url" />
          <meta
            content="Temuulen Gan - Projects"
            property="og:title"
          />
          <meta
            content="Portfolio of projects by Temuulen Gan."
            property="og:description"
          />
          <meta
            content="https://via.placeholder.com/1200x630"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta
            content="https://temuulengan.github.io/personal-web/projects"
            property="twitter:url"
          />
          <meta
            content="Temuulen Gan - Projects"
            property="twitter:title"
          />
          <meta
            content="Portfolio of projects by Temuulen Gan."
            property="twitter:description"
          />
          <meta
            content="https://via.placeholder.com/1200x630"
            property="twitter:image"
          />
        </Head>
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                placeholder="Search projects"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects
              .filter((e) =>
                e.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.title}
                  desc={project.frontmatter.summary}
                  imageURL={project.frontmatter.image}
                  tag={project.frontmatter.techStack
                    .split(',')
                    .map((e) => e.trim())}
                  title={project.title}
                  slug={project.frontmatter.slug}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Real projects with placeholder images
  const sampleProjects = [
    {
      title: 'PortfolioIQ - AI-Powered Financial Portfolio Analyzer',
      frontmatter: {
        summary: 'Mobile app analyzing stock/index portfolios with Yahoo Finance API integration for real-time market data and automated risk assessment. Full SDLC execution with 100% data ingestion accuracy.',
        image: 'https://via.placeholder.com/800x400/000000/3CCF91?text=PortfolioIQ',
        techStack: 'React Native, Python, Yahoo Finance API, Firebase',
        slug: 'portfolioiq',
        date: '2024-03-01',
      },
    },
    {
      title: 'AI Recipe Chat - Intelligent Cooking Assistant',
      frontmatter: {
        summary: 'Frontend Lead role delivering a personalized recipe recommendation engine with OpenAI-powered chat functionality. Agile team collaboration with rapid prototyping and seamless natural language conversation flows.',
        image: 'https://via.placeholder.com/800x400/000000/3CCF91?text=AI+Recipe+Chat',
        techStack: 'React, Next.js, OpenAI API, Node.js',
        slug: 'ai-recipe-chat',
        date: '2024-02-15',
      },
    },
    {
      title: 'FinGuard - Emotion-Driven Personal Financial Risk Database',
      frontmatter: {
        summary: 'Complex data architecture featuring schema normalization and behavioral pattern analysis. Advanced data modeling classifying financial risks based on emotional input with structured analytical reports.',
        image: 'https://via.placeholder.com/800x400/000000/3CCF91?text=FinGuard',
        techStack: 'MySQL, Python, Flask, SQL',
        slug: 'finguard',
        date: '2024-01-10',
      },
    },
  ];

  try {
    const blog = new GithubBlog({
      repo: 'temuulengan/personal-web',
      token: process.env.GITHUB_TOKEN,
    })
    const projects = await blog.getPosts({
      query: {
        author: 'temuulengan',
        type: 'project',
        state: 'published',
      },
      pager: { limit: 100, offset: 0 },
    })

    // Use GitHub projects if available, otherwise use sample projects
    const projectsList = projects.edges && projects.edges.length > 0
      ? projects.edges
          .sort(
            (a, b) =>
              Date.parse(b.post.frontmatter.date) -
              Date.parse(a.post.frontmatter.date),
          )
          .map((e) => e.post)
      : sampleProjects;

    return {
      props: {
        projects: projectsList,
      },
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Return real projects on error
    return {
      props: {
        projects: sampleProjects,
      },
    }
  }
}
