import React from "react";

import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";

const Nav = () => {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  return (
    <>
      <button>Home </button>
      <button>My network ({networkCount > 99 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount > 99 ? "99+" : jobCount})</button>
      <button onClick={() => setMessageCount((c) => c + 1)}>
        Messaging ({messageCount > 99 ? "99+" : messageCount}){" "}
      </button>
      <button>
        Notifications({notificationCount > 99 ? "99+" : notificationCount})
      </button>
      <button>Me</button>
    </>
  );
};

export default Nav;
