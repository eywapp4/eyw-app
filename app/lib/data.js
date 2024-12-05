import { client } from "../../sanity/lib/client";
import {
  HOME_ACTIVITIES_QUERY,
  HOME_RESOURCES_QUERY,
  RESOURCES_QUERY,
  RESOURCE_QUERY,
  ACTIVITIES_QUERY,
  ACTIVITY_QUERY,
  TRAININGS_QUERY,
  TRAINING_QUERY,
  FETCH_LATEST_ACTIVITY,
  RESOURCE_CYM_QUERY,
  ACTIVITY_CYM_QUERY,
  TRAINING_CYM_QUERY,
  ABAH_QUERY,
  ABAH_WEEKLY_QUERY,
  GET_ABAH_PIN
} from "../../sanity/lib/queries";

const options = { next: { revalidate: 30 } };

export async function getHomeResources() {
  try {
    const resources = await client.fetch(HOME_RESOURCES_QUERY, {}, options);
    return resources;
  } catch (err) {
    console.error(err);
  }
}

export async function getHomeActivities() {
  try {
    const activities = await client.fetch(HOME_ACTIVITIES_QUERY, {}, options);
    return activities;
  } catch (err) {
    console.error(err);
  }
}

export async function getResources() {
  try {
    const resources = await client.fetch(RESOURCES_QUERY, {}, options);
    return resources;
  } catch (err) {
    console.error(err);
  }
}

export async function getResource(slug) {
  try {
    const resource = await client.fetch(
      RESOURCE_QUERY,
      { slug: slug },
      options
    );
    return resource;
  } catch (err) {
    console.error(err);
  }
}

export async function getActivities() {
  try {
    const activities = await client.fetch(ACTIVITIES_QUERY, {}, options);
    return activities;
  } catch (error) {
    console.error(error);
  }
}

export async function getAcitvity(slug) {
  try {
    const activity = await client.fetch(
      ACTIVITY_QUERY,
      { slug: slug },
      options
    );
    return activity;
  } catch (error) {
    console.error(error);
  }
}

export async function getTrainings() {
  try {
    const trainings = await client.fetch(TRAININGS_QUERY, {}, options);
    return trainings;
  } catch (error) {
    console.error(error);
  }
}

export async function getTraining(slug) {
  try {
    const training = await client.fetch(
      TRAINING_QUERY,
      { slug: slug },
      options
    );
    return training;
  } catch (error) {
    console.error(error);
  }
}

export async function getLatestActivity() {
  try {
    const activity = await client.fetch(FETCH_LATEST_ACTIVITY, {}, options);
    return activity;
  } catch (error) {
    console.error(error);
  }
}

export async function getResourceCym(slug) {
  try {
    const resource = await client.fetch(
      RESOURCE_CYM_QUERY,
      { slug: slug },
      options
    );
    return resource;
  } catch (err) {
    console.error(err);
  }
}

export async function getAcitvityCym(slug) {
  try {
    const activity = await client.fetch(
      ACTIVITY_CYM_QUERY,
      { slug: slug },
      options
    );
    return activity;
  } catch (error) {
    console.error(error);
  }
}

export async function getTrainingCym(slug) {
  try {
    const training = await client.fetch(
      TRAINING_CYM_QUERY,
      { slug: slug },
      options
    );
    return training;
  } catch (error) {
    console.error(error);
  }
}

export async function getAbah() {
  try {
    const abah = await client.fetch(ABAH_QUERY, {}, options);
    return abah;
  } catch (error) {
    console.log(error);
  }
}

export async function getAbahWeekly(slug) {
  try {
    const training = await client.fetch(
      ABAH_WEEKLY_QUERY,
      { slug: slug },
      options
    );
    return training;
  } catch (error) {
    console.error(error);
  }
}

export async function getAbahPin(slug){
  try {
    const pin = await client.fetch(GET_ABAH_PIN, {slug: slug}, options);
    return pin;
  } catch (error) {
    console.log(error)
  }
}
