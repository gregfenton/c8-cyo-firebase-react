import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';
import UploadImage from './UploadImage';

function HeroesList() {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (db) {
      let collectionRef = collection(db, 'heroes');
      let queryRef = query(collectionRef, orderBy('name'));
      const unsubscribe = onSnapshot(queryRef, (querySnap) => {
        if (querySnap.empty) {
          console.log('No docs found');
        } else {
          let heroesData = querySnap.docs.map((doc) => {
            return { ...doc.data(), DOC_ID: doc.id };
          });
          setHeroes(heroesData);
        }
      });

      return unsubscribe;
    }
  }, [db]);

  return (
    <div>
      {heroes.map((hero) => {
        return (
          <ul key={hero.DOC_ID}>
            <li>name: {hero.name}</li>
            <li>vehicle: {hero.vehicle}</li>
            <li>docId: {hero.DOC_ID}</li>
            <li>
              image:
              {hero.imageUrl ? (
                <img src={hero.imageUrl} alt={"the hero's face"} />
              ) : (
                <UploadImage docId={hero.DOC_ID} />
              )}
            </li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
}

export default HeroesList;
