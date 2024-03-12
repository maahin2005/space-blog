// import { client } from '../../Context/sanity-client';

// export default async function getData() {
//   await client
//     .fetch(
//       '*[_type == "Space"]{title,body,author->{name, "pic":image.asset->url},readTime,"img":images.asset->url}'
//     )
//     .then(data => {
//       console.log('data: ', data);
//       return data;
//     })
//     .catch(error => console.error(error));
// }

import { client } from '../../Context/sanity-client';

export default function getData() {
  return client.fetch(
    '*[_type == "Space"]{title,body,author->{name, "pic":image.asset->url},readTime,"img":images.asset->url}'
  );
}
