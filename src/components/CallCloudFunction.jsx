import { httpsCallable } from 'firebase/functions';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';

const CallCloudFunction = () => {
  const fbContext = useContext(FirebaseContext);
  const cloudFuncs = fbContext.cloudFuncs;

  const [response, setResponse] = useState("haven't called the function yet");

  const doInitializeInflencer = async () => {
    const myInitializeFunc = httpsCallable(
      cloudFuncs,
      'initializeNewInfluencer'
    );
    const result = await myInitializeFunc({
      startTime: 11,
      meetingLength: 15,
      numMeetings: 10
    });
    const data = result.data;
    setResponse(data);
  };

  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: 'blue',
        borderStyle: 'solid',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h4>CallCloudFunction</h4>

      <button onClick={doInitializeInflencer}>Initialize Me!</button>

      <p>Response from the function:</p>
      <pre>{response}</pre>
    </div>
  );
};

export default CallCloudFunction;
