import { Problem } from "./models/problem.model";

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc: "Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Add Two Numbers",
    desc: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    difficulty: "Medium"
  },
  {
    id: 3,
    name: "Longest Substring Without Repeating Characters",
    desc: "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "Medium"
  },
  {
    id: 4,
    name: "Median of Two Sorted Arrays",
    desc: "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    difficulty: "Hard"
  },
  {
    id: 5,
    name: "Design TinyURL",
    desc: "How would you design a URL shortening service that is similar to TinyURL? Background:\
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.",
    difficulty: "Super"
  }
]