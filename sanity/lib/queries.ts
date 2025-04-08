import { defineQuery } from "next-sanity";

//query that returns the 4 most recently modified resources
export const HOME_RESOURCES_QUERY = defineQuery(
  `*[_type == "resource" && programContent != true]| order(_updatedAt desc)[0...4]{slug, title, "imageURL": headerImage.asset->url}`
);

//query that returns the 4 most recently modified activities
export const HOME_ACTIVITIES_QUERY = defineQuery(
  `*[_type == "activity" && programContent != true]| order(_updatedAt desc)[0...4]{slug, title, "imageURL": headerImage.asset->url}`
);

//returns all resource entries with the 3 fields requried. Returns newest created resource first
export const RESOURCES_QUERY = defineQuery(
  `*[_type == "resource" && programContent != true]| order(_createdAt desc){slug, title, "imageURL": headerImage.asset->url}`
);

//returns the requested resource by slug, with joins to also return the related activity entries
export const RESOURCE_QUERY = defineQuery(
  `*[_type == "resource" && slug.current == $slug][0]{..., relatedActivities[]->, "translationSlug": translation->slug.current, "resources": resources[].asset->{url, originalFilename}}`
);

//returns all activity entries with the 3 fields requried, ordered by newest created first
export const ACTIVITIES_QUERY = defineQuery(
  `*[_type == "activity" && programContent != true]| order(_updatedAt desc){slug, title, "imageURL": headerImage.asset->url}`
);

//returns the requested activity by slug
export const ACTIVITY_QUERY = defineQuery(
  `*[_type == "activity" && slug.current == $slug][0]{..., "translationSlug": translation->slug.current, "resources": resources[].asset->{url, originalFilename}}`
);

//returns all training entries, ordered by newest created first
export const TRAININGS_QUERY = defineQuery(
  `*[_type == "training" && programContent != true]| order(_updatedAt desc){slug, title, "imageURL": headerImage.asset->url}`
);

//returns the requested training entry by slug and joins the video asset url
export const TRAINING_QUERY = defineQuery(
  `*[_type == "training" && slug.current == $slug][0]{..., "videoUrl": video.asset->url, "translationSlug": translation->slug.current, "resources": resources[].asset->{url, originalFilename}}`
);

export const FETCH_LATEST_ACTIVITY = defineQuery(
  `*[_type == "activity"]| order(_createdAt desc)[0]{..., "imageURL": headerImage.asset->url}`
);

//returns the requested resource by slug, with joins to also return the related activity entries
export const RESOURCE_CYM_QUERY = defineQuery(
  `*[_type == "adnodd" && slug.current == $slug][0]`
);

//returns the requested activity by slug
export const ACTIVITY_CYM_QUERY = defineQuery(
  `*[_type == "gweithgaredd" && slug.current == $slug][0]`
);

//returns the requested training entry by slug and joins the video asset url
export const TRAINING_CYM_QUERY = defineQuery(
  `*[_type == "hyfforddi" && slug.current == $slug][0]{..., "videoUrl": video.asset->url}`
);

//return ABAH type content to display on the ABAH home route
export const ABAH_QUERY = defineQuery(
  `*[_type == "abah"] | order(_createdAt asc){title, slug, "imageURL": headerImage.asset->url}`
);

export const ABAH_WEEKLY_QUERY = defineQuery(
  '*[_type == "abah" && slug.current == $slug][0]{slug, title, introduction, "imageURL": headerImage.asset->url, resources[]->{"imageURL": headerImage.asset->url, "slug": slug.current, title}, activities[]->{"imageURL": headerImage.asset->url, "slug": slug.current, title}, video->{..., "videoUrl": video.asset->url}}'
);

export const GET_ABAH_PIN = defineQuery(
  '*[_type == "abah" && slug.current == $slug][0]{pin}'
);

//return Movers type content to display on the Movers home route
export const MOVERS_QUERY = defineQuery(
  `*[_type == "movers"] | order(_createdAt asc){title, slug, "imageURL": headerImage.asset->url}`
);

export const MOVERS_WEEKLY_QUERY = defineQuery(
  '*[_type == "movers" && slug.current == $slug][0]{slug, title, introduction, "imageURL": headerImage.asset->url, resources[]->{"imageURL": headerImage.asset->url, "slug": slug.current, title}, activities[]->{"imageURL": headerImage.asset->url, "slug": slug.current, title}, video->{..., "videoUrl": video.asset->url}}'
);

export const MOVERS_PIN = defineQuery(
  '*[_type == "movers" && slug.current == $slug][0]{pin}'
);

//returns the intro for a given page
export const GET_PAGE_INTRO = defineQuery('*[_type == "pageIntro" ][0]');

//get the faqs
export const GET_FAQS = defineQuery(`*[_type == "faqs"]{faqs}`);

//get the app instructions
export const GET_INSTRUCTIONS = defineQuery(
  `*[_type == "instructions"][0]{instructions}`
);

//get teh blog type data
export const GET_BLOGS = defineQuery(
  `*[_type == 'blog']| order(_createdAt desc){ link, title, "imageURL": cardImage.asset->url}`
);
