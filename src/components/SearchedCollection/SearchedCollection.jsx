import React from "react";
import { Link } from "react-router-dom";
import {
   PreviewPhotos,
   LargePhoto,
   SmallPhotos,
   CollectionDescription,
} from "./SearchedCollection.style";
import { Tag } from "components";

const SearchedCollection = ({
   collection: { preview_photos, title, total_photos, user, tags },
}) => {
   return (
      <div>
         <PreviewPhotos>
            <LargePhoto>
               {
                  <img
                     src={preview_photos?.[0].urls.small}
                     alt={preview_photos?.[0].id}
                  />
               }
            </LargePhoto>
            <SmallPhotos>
               {preview_photos?.slice(1, 3).map((photo) => (
                  <div>
                     <img
                        src={photo.urls.small}
                        alt={photo.id}
                        key={photo.id}
                     />
                  </div>
               ))}
            </SmallPhotos>
         </PreviewPhotos>
         <CollectionDescription>
            <h3>{title}</h3>
            <p>
               {total_photos} photos ~ Curated by {user?.name}
            </p>
            <ul>
               {tags?.slice(0, 3).map((tag) => (
                  <Link
                     to={`/search/${tag.title}`}
                     key={tags.indexOf(tag)}
                     className="tag"
                  >
                     {tag.title}
                  </Link>
               ))}
            </ul>
         </CollectionDescription>
      </div>
   );
};

export default SearchedCollection;
