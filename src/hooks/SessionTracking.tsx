import { useEffect, useState } from 'react';
import { getSessionData, setSessionData } from '../utils/SessionStorage';

export function useTrackingInfo() {
  const [medium, setMedium] = useState<string | null>(null);
  const [campaign, setCampaign] = useState<string | null>(null);
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
   

    const sessionMedium = getSessionData('medium') || 'none';
    const sessionCampaign = getSessionData('campaign') || 'none';
    const sessionSource = getSessionData('source') || 'direct';

    if (!getSessionData('medium')) {
      setSessionData('medium', sessionMedium);
    }
    if (!getSessionData('campaign')) {
      setSessionData('campaign', sessionCampaign);
    }
    if (!getSessionData('source')) {
      setSessionData('source', sessionSource);
    }

    // Update state with session data
    setMedium(sessionMedium);
    setCampaign(sessionCampaign);
    setSource(sessionSource);
  }, []);

  return { medium, campaign, source };
}
