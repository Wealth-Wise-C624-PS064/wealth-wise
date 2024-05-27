import { collection, addDoc } from "firebase/firestore";

import db from "@/lib/firebase/db";

export const addPensionFund = async (data) => {
  try {
    const pensiontRef = collection(db, "pension-fund");
    await addDoc(pensiontRef, data);
  } catch (error) {
    throw new Error(error);
  }
};

export const addEmergencyFund = async (data) => {
  try {
    const emergencyRef = collection(db, "emergency-fund");
    await addDoc(emergencyRef, data);
  } catch (error) {
    throw new Error(error);
  }
};

export const addInvestMent = async (data) => {
  try {
    const investment = collection(db, "investment");
    await addDoc(investment, data);
  } catch (error) {
    throw new Error(error);
  }
};
