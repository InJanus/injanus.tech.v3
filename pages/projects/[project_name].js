import { API_URL } from "../../public/properties";

function Post ({ data }){
  console.log(data);
  //for this page it needs to implement all of the pictures
  //title, discription and what i learned from it
  //as well as tags to related skills and file uploads
  //this is going to be the hardest part and a lot of backend work in python
  return (
    <p>test</p>
  );
}

export async function getStaticPaths() {
    //need a way to get all the project names for the project pages
    //this is just an api call for all the project names
    const project_names = [
      {params : {project_name : 'testpage'}},
      {params : {project_name : 'testpage2'}},
    ];
    console.log(project_names);
    return {
      paths: project_names,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // const postData = getPostData(params.id);
    
    const res = await fetch(API_URL + '/experience');
    const data = await res.json();
    return {
      props: { data }, // will be passed to the page component as props
    }
}

export default Post;