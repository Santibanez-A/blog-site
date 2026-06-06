
import Article from "./Article";

// articles: {tite, date, preview}[]
function ArticleList({posts}) {
    return (

    <main>
         
        {posts.map((post) => 
                <Article key={post.id} 
                    name={post.title}
                    date={post.date}
                    preview={post.preview}>

                </Article> 
        )}
        
    </main>
    );

}

export default ArticleList;
