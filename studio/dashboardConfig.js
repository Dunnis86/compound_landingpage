export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61345e20a4f021534243ad54',
                  title: 'Sanity Studio',
                  name: 'compound-landingpage-studio',
                  apiId: '157e97f9-88f1-4025-bd52-48a1b73027b6'
                },
                {
                  buildHookId: '61345e20aa4cec8c9ece96a6',
                  title: 'Landing pages Website',
                  name: 'compound-landingpage',
                  apiId: '8d32e545-0a54-4935-8123-d29441b52acf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dunnis86/compound_landingpage',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://compound-landingpage.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
