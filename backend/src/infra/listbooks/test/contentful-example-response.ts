export const exampleResponse = {
  sys: {
    type: 'Array',
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: '9iq7dqw56i6q',
          },
        },
        id: '1FgJa7Fajh2NvPtLoGo76o',
        type: 'Entry',
        createdAt: '2020-12-29T14:30:29.234Z',
        updatedAt: '2020-12-29T15:02:32.541Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
        revision: 2,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'book',
          },
        },
        locale: 'en-US',
      },
      fields: {
        title: 'Agile Product Management',
        author: 'Yunjae Oh',
        myReview: {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value: 'My review',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
        rating: 3,
        coverImage: {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: '36gMyk68F3OfW1K9iBDvZV',
          },
        },
        status: 'FINISHED',
        readDate: '2020-09-08T00:00+01:00',
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: '9iq7dqw56i6q',
          },
        },
        id: '5EVqTCmwBpJTWfn9mVWqPZ',
        type: 'Entry',
        createdAt: '2020-12-20T18:06:04.182Z',
        updatedAt: '2020-12-20T18:07:30.233Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment',
          },
        },
        revision: 2,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'book',
          },
        },
        locale: 'en-US',
      },
      fields: {
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        rating: 4,
        coverImage: {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: '36gMyk68F3OfW1K9iBDvZV',
          },
        },
        status: 'READING',
      },
    },
  ],
  includes: {
    Asset: [
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '9iq7dqw56i6q',
            },
          },
          id: '36gMyk68F3OfW1K9iBDvZV',
          type: 'Asset',
          createdAt: '2020-12-20T18:07:22.915Z',
          updatedAt: '2020-12-20T18:07:22.915Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'domain driven design',
          description: 'Cover of domain driven design',
          file: {
            url:
              '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
            details: {
              size: 62952,
              image: {
                width: 180,
                height: 238,
              },
            },
            fileName: 'domain_driven_design.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    ],
  },
};
