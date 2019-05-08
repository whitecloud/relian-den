export interface User {
  name: string;

  // client needs
  id?: string;
  exists?: boolean;
}

/**
 * These are root pages that can have categories and items within them
 * i.e. Home, Volunteer Opportunities, Marketplace, etc
 */
export interface Page {
  title: string;
  
  // auth metadata
  createdAt: number; // unix timestamp
  createdBy: string; // userId

  // client needs
  id?: string;
  exists?: boolean;
}

/**
 * Categories exist within pages
 * i.e. Resources, Hackathan Projects, etc
 */
export interface Category {
  pageId: string;
  title: string;

  // auth metadata
  createdAt: number; // unix timestamp
  createdBy: string; // userId

  // client needs
  id?: string;
  exists?: boolean;
}

/**
 * Items exist within categories
 * Items also can be links to other pages within the app (Page or detail pages)
 * i.e. Foosey, Suggestion Box, etc.
 */
export interface Item {
  categoryId: string;
  title: string;
  type: string; // page, detail, link
  size: string; // large, medium, small
  iconUrl: string;

  // user stuff
  favorites: string[]; // userIds that added this to their favs

  // optional
  url?: string; // used for links
  color?: string; // hex value
  shortDescription?: string; // only makes sense for a medium or large item
  allowComments?: boolean; // only makes sense for a detail view
  longDescription?: string; // only makes sense for a detail view

  // auth metadata
  createdAt: number; // unix timestamp
  createdBy: string; // userId

  // client needs
  id?: string;
  exists?: boolean;
}

/**
 * Generated by cloud functions
 */
export interface ActivityItem {
  // generated by several cloud functions just showcasing things 
  // happening throughout the app
  // i.e. Justin created a page: Boise
  actionText: string;
  item: Item;

  // auth metadata
  createdAt: number; // unix timestamp
  createdBy: string; // userId

  // client needs
  id?: string;
  exists?: boolean;
}

/**
 * /messages will be a subcollection of Item
 */
export interface Message {
  userName: string; // full name i.e. Matt Taylor
  text: string; // the message

  // auth metadata
  createdAt: number; // unix timestamp
  createdBy: string; // userId

  // client needs
  id?: string;
  exists?: boolean;
}

/**
 * Used for more performant search without bloating the Item object
 */
export interface SearchItem {
  matches: string[]; // everything this item can match on 'array-contains'
  item: Item;

  // client needs
  id?: string;
  exists?: boolean;
}
