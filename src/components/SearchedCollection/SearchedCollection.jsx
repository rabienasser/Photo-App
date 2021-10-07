import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
   PreviewPhotos,
   LargePhoto,
   SmallPhotos,
   CollectionDescription,
} from "./SearchedCollection.style";

const SearchedCollection = ({
   collection: { preview_photos, title, total_photos, user, tags, id },
}) => {
   const { pathname } = useLocation();
   const searchTerm = pathname.split("/").pop();

   return (
      <div>
         <Link to={`/search/collections/${searchTerm}/${id}`}>
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
                           alt={photo.description}
                           key={photo.id}
                        />
                     </div>
                  ))}
               </SmallPhotos>
            </PreviewPhotos>
         </Link>
         <CollectionDescription>
            <Link to={`/search/collections/${searchTerm}/${id}`}>
               <h3>{title}</h3>
            </Link>
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
