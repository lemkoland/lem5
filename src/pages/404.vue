
  <template>
    <Layout>
      <h1>Problemy 404</h1>
      <h2>Nie znaleziono czego szukasz</h2>






    </Layout>
  </template>

  <page-query>
    {
      allWordPressPostTag {
        edges {
          node {
            title
            id
            path
          }
        }
      }
      allWordPressPage {
        edges {
          node {
            title
            path
          }
        }
      }
      allWordPressCategory (sortBy: "name", order: ASC) {
    edges {
      node {
        title
        id
        path
      }
    }
  }
    }
  </page-query>

  <script>
  export default {

  }
  </script>
