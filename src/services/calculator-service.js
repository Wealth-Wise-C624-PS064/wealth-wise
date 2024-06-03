import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

import db from "@/lib/firebase/db";

export const addPensionFund = async (data) => {
  try {
    const pensiontRef = collection(db, "pension-fund");
    await addDoc(pensiontRef, data);
  } catch (error) {
    throw new Error(error);
  }
};

export const getPensionFund = async () => {
  try {
    const pensionFundRef = collection(db, "pension-fund");
    const q = query(pensionFundRef, orderBy("createdAt", "desc"));

    const pensionSnapshot = await getDocs(q);

    return pensionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
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

export const getEmergencyFund = async () => {
  try {
    const emergencyRef = collection(db, "emergency-fund");
    const q = query(emergencyRef, orderBy("createdAt", "desc"));

    const emergencySnapshot = await getDocs(q);

    return emergencySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};

export const addInvestment = async (data) => {
  try {
    const investment = collection(db, "investment");
    await addDoc(investment, data);
  } catch (error) {
    throw new Error(error);
  }
};

export const getInvestment = async () => {
  try {
    const investmentRef = collection(db, "investment");
    const q = query(investmentRef, orderBy("createdAt", "desc"));

    const investmentSnapshot = await getDocs(q);

    return investmentSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};
