"use client";

import AuthModal from "@/components/auth_modal";
import Model from "@/components/modal";
import SubscribeModel from "@/components/subscribe_model";
import UploadModel from "@/components/upload_modal";
import { ProductWithPrice } from "@/types/types";

import { useEffect, useState } from "react";

interface ModelProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModelProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModel />
      <SubscribeModel products={products} />
    </>
  );
};

export default ModalProvider;
