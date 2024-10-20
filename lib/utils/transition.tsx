'use client'

import { motion } from "framer-motion";
import {
  defaultParentFastVariant,
  defaultParentVariant,
  fromLeftVariant,
  fromBottomAloneVariant,
  fromBottomVariant,
  fromLeftAloneVariant,
  fromRightAloneVariant,
  fromTopAloneVariant,
  opacityAloneVariant,
  transElementVariant,
  transStartVariant,
  fromRightVariant,
} from "./variants";

interface TransitionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  addClass?: string;
  onClick?: () => void;
}

export const TransitionElement: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div variants={transElementVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export const TransitionStart: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div variants={transStartVariant} initial="initial" animate="animate" style={{ gap: "0rem" }}>
      {children}
    </motion.div>
  );
};

// FOR FUTURE USAGE

// -------------------------PARENTS-------------------------

// Parent
export const TransitionParent: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={defaultParentVariant}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentFast: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={defaultParentFastVariant}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// -------------------------CHILDREN-------------------------

// Child Variant Elements with parents
export const TransitionFromLeft: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div variants={fromLeftVariant} className={`${props.className} ${addClass && addClass}`} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const TransitionFromRight: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div variants={fromRightVariant} className={`${props.className} ${addClass && addClass}`} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const TransitionFromBottom: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div variants={fromBottomVariant} className={`${props.className} ${addClass && addClass}`} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const TransitionOpacity: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={opacityAloneVariant}
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// Standalone
export const TransitionOpacityAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={opacityAloneVariant}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromTopAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromTopAloneVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromBottomAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromBottomAloneVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromLeftAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromLeftAloneVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromRightAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromRightAloneVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
