export class WpGraphQlPostConst {
  static list = `query PostListQuery {
        blogs {
          edges {
            node {
              title
              id
              date
              content
            }
          }
        }
    }`;
}
