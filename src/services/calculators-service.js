import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
} from "@firebase/firestore";

import db from "@/lib/firebase/db";
import auth from "@/lib/firebase/auth";

// PENSION FUND

export const getPensionFund = async () => {
  try {
    const pensionFundRef = collection(db, "pension-fund");

    if (!auth.currentUser.uid) {
      throw new Error("User not authenticated");
    }

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

export const addPensionFund = async (data) => {
  try {
    const pensionsRef = collection(db, "pension-fund");

    const { uid } = auth.currentUser;

    const createdAt = new Date().toISOString();

    await addDoc(pensionsRef, {
      ...data,
      author_id: uid,
      createdAt,
    });
  } catch (error) {
    throw new Error(error);
  }
};

// EMERGENCY FUND

export const addEmergencyFund = async (data) => {
  try {
    const emergencyRef = collection(db, "emergency-fund");

    const { uid } = auth.currentUser;

    const createdAt = new Date().toISOString();

    await addDoc(emergencyRef, {
      ...data,
      author_id: uid,
      createdAt,
    });
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

// INVESTMENT FUND

export const addInvestment = async (data) => {
  try {
    const investment = collection(db, "investment");

    const { uid } = auth.currentUser;

    const createdAt = new Date().toISOString();

    await addDoc(investment, {
      ...data,
      author_id: uid,
      createdAt,
    });
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
