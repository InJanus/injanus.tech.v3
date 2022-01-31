import { API_URL } from "../../public/properties";

function Post ({ data }){
  // console.log(data);
  //for this page it needs to implement all of the pictures
  //title, discription and what i learned from it
  //as well as tags to related skills and file uploads
  //this is going to be the hardest part and a lot of backend work in python
  return (
    <div>
      {data.title}
    </div>
  );
}

export async function getStaticPaths() {
    //need a way to get all the project names for the project pages
    //this is just an api call for all the project names
    const res = await fetch(API_URL + '/project/get_project_card')
    const data = await res.json();
    
    const project_names = data.map((myrows) => ({
      params: {project_name: myrows.project_name},
    }))

    return {
      paths: project_names,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // console.log(params);
    // const postData = getPostData(params.id);
    // const res = await fetch(API_URL + '/project/project1');
    // const data = await res.json();

    const res = await fetch(API_URL + '/project/' + params.project_name)
    const data = await res.json();
    return {
      props: { data }, // will be passed to the page component as props
    }
}

export default Post;