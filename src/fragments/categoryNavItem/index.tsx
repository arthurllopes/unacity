import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/Category";
import { RootState } from "../../store/configureStore";
type Props = {
  item: any;
};
const CategoryNavItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.Category);

  //console.log(item)
  return (
    <Flex
      alignItems="center"
      minW={{ base: 140, md: 160 }}
      borderColor={item?.cor}
      bg={item.id === category ? item?.cor : "gray.100"}
      borderWidth={2}
      boxShadow={item.id === category ? "lg" : "sm"}
      cursor="pointer"
      display="flex"
      p={[3, 4]}
      borderRadius={8}
      onClick={() => dispatch(setCategory(item.id))}
    >
      {item.icon && (
        <Image
          src={`https:${item.icon?.fields.file.url}`}
          alt="Category"
          width={24}
          height={24}
          objectFit="contain"
        />
      )}
      <Text fontSize={["sm"]} textAlign="center" ml={2}>
        {item.nome}
      </Text>
    </Flex>
  );
};

export default CategoryNavItem;
