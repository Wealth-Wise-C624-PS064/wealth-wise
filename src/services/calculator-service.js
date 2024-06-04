import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  where,
} from "firebase/firestore";

import db from "@/lib/firebase/db";

import { getAuth } from "firebase/auth";

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
    const auth = getAuth();
    const currentUser = auth?.currentUser;
    const pensionFundRef = collection(db, "pension-fund");
    const q = query(
      pensionFundRef,
      where("authorId", "==", currentUser.uid),
      orderBy("createdAt", "desc")
    );

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
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const emergencyRef = collection(db, "emergency-fund");

    const q = query(
      emergencyRef,
      where("authorId", "==", currentUser?.uid),
      orderBy("createdAt", "desc")
    );

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
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const investmentRef = collection(db, "investment");

    const q = query(
      investmentRef,
      where("authorId", "==", currentUser?.uid),
      orderBy("createdAt", "desc")
    );

    const investmentSnapshot = await getDocs(q);

    return investmentSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};
