# effective-typescript-notes
Repo to effective typescript book examples

## Chapter 1 — Getting to Know TypeScript

1. Understand the Relationship Between TypeScript and JavaScript
2. Know Which TypeScript Options You’re Using
3. Understand That Code Generation Is Independent of Types
4. Get Comfortable with Structural Typing
5. Limit Use of the any Type

## Chapter 2 — TypeScript’s Type System

6. Use Your Editor to Interrogate and Explore the Type System
7. Think of Types as Sets of Values
8. Know How to Tell Whether a Symbol Is in the Type Space or Value Space
9. Prefer Type Declarations to Type Assertions
10. Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)
11. Recognize the Limits of Excess Property Checking
12. Apply Types to Entire Function Expressions When Possible
13. Know the Differences Between type and interface
14. Use Type Operations and Generic Types to Avoid Repeating Yourself
15. Use Index Signatures for Dynamic Data
16. Prefer Arrays, Tuples, and ArrayLike to number Index Signatures
17. Use readonly to Avoid Errors Associated with Mutation
18. Use Mapped Types to Keep Values in Sync

## Chapter 3 — Type Inference and Control Flow Analysis

19. Avoid Cluttering Your Code with Inferable Types
20. Use Different Variables for Different Types
21. Understand Type Widening
22. Understand Type Narrowing
23. Create Objects All at Once
24. Be Consistent in Your Use of Aliases
25. Use Async Functions Instead of Callbacks for Asynchronous Code
26. Understand How Context Is Used in Type Inference
27. Use Functional Constructs and Libraries to Help Types Flow

## Chapter 4 — Type Design

28. Prefer Types That Always Represent Valid States
29. Be Liberal in What You Accept and Strict in What You Produce
30. Don’t Repeat Type Information in Documentation
31. Push Null Values to the Perimeter of Your Types
32. Prefer Unions of Interfaces to Interfaces of Unions
33. Prefer More Precise Alternatives to String Types
34. Prefer Incomplete Types to Inaccurate Types
35. Generate Types from APIs and Specs, Not Data
36. Name Types Using the Language of Your Problem Domain
37. Consider “Brands” for Nominal Typing

## Chapter 5 — Working with any

38. Use the Narrowest Possible Scope for any Types
39. Prefer More Precise Variants of any to Plain any
40. Hide Unsafe Type Assertions in Well-Typed Functions
41. Understand Evolving any
42. Use unknown Instead of any for Values with an Unknown Type
43. Prefer Type-Safe Approaches to Monkey Patching
44. Track Your Type Coverage to Prevent Regressions in Type Safety

## Chapter 6 — Types Declarations and @types

45. Put TypeScript and @types in devDependencies
46. Understand the Three Versions Involved in Type Declarations
47. Export All Types That Appear in Public APIs
48. Use TSDoc for API Comments
49. Provide a Type for this in Callbacks if It’s Part of Their API
50. Prefer Conditional Types to Overloaded Declarations
51. Mirror Types to Sever Dependencies
52. Be Aware of the Pitfalls of Testing Types

## Chapter 7 — Writing and Running Your Code

53. Prefer ECMAScript Features to TypeScript Features
54. Know How to Iterate Over Objects
55. Understand the DOM Hierarchy
56. Don’t Rely on Private to Hide Information
57. Use Source Maps to Debug TypeScript
58. Write Modern JavaScript
59. Use @ts-check and JSDoc to Experiment with TypeScript
60. Use allowJs to Mix TypeScript and JavaScript
61. Convert Module by Module Up Your Dependency Graph
62. Don’t Consider Migration Complete Until You Enable noImplicitAny
