// Beyond the basics
const Arr = [];
// %DebugPrint(Arr);


/*

- Please refer below referred video to watch whole thing again as it's important to know the behind the scenes of the array. 
- This is in depth knowlege of the topic array that is nowhere else present.
*/ 

/*
Refer below link to get the notes
https://www.notion.so/Advance-Array-Engineering-9f7c41c0120545e293ac5a0ef1879a27


Text notes of same link above are down below please refere those
**JSVU**

- JSVU is the **J**ava**S**cript (engine) **V**ersion **U**pdater.
- JSVU makes it easy to install recent versions of various JavaScript engines without having to compile them from source.
- We can deep dive into any JS engine by adding JSVU package to our npm globally.
- [Refer this link to get more knowledge on this JSVU from GitHub repo.](https://github.com/GoogleChromeLabs/jsvu/tree/main)

**Array:**

- Two types of array:
    - Continuous array
    - Holey array.
- In each language there is process for array optimisation.
- In JavaScript this process is done in 3 ways in both types of array(continuous, holey):
    - SMI(Small Integer) - This is kind of type of array.
    - Packed element
    - Double(float, string, functions)
- Now JavaScript optimises each array based on the element type, element position.
- So if array contains string type element then it has different optimisation process. Similarly if array contains functions, then it has different process for optimisation and same goes for null, integer, float, boolean, etc.

**Packed SMI Element:**

- It is categorised in continuous type of array but still we call it as packed SMI.
- It is a best type of array. But it does not accepts anything else apart from integer not even decimal values. So it is restricted to Integer only.

**Packed Double Element:**

- As soon as you push some decimal values to the Packed SMI Element array, it becomes Packed Double Element array.
- As soon as you pushed any element to the array which is having only integer it becomes packed double element array.

**Packed Element:**

- As soon as you add any string or function, etc. to the Packed Double Element array it becomes Packed Element array meaning there are multiple types of element in the array.

**Holey Elements:**

- Holey element consist of double, integer, string and some null value element as well.
- It has some wholes which remains empty with that particular index.
- As you can see in below image we are accessing the 19th position of an array which does not exist and this is a bit costly operation for our array.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd1a69dd-51e7-41e8-a937-2e824a140fe5/bdbc1181-9691-40a6-9dc4-7baef884815a/Untitled.png)
    

**How array finds any particular Index?**

- Bound check - A limit of array where it can check the max limit of element access and once it exceeds it simply returns undefined.
- But if you ask for any middle value which is empty/null then it is a bit difficult because bound check in that case is already happened. And if the array is not continuous and it is holey array then JS engine will add multiple `hasOwnProperty` checks on it. It is shown in the image and code below this paragraph.
- In that case it becomes costly operation for compiler/engine to check whether that element exist of not and it will call multiple **`hasOwnProperty`**  checks for that particular operation as shown below.
- **Example:**

```html
arrTwo = [1, 2, 3, 4, , , , , , 10]
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd1a69dd-51e7-41e8-a937-2e824a140fe5/deca1f3a-fce9-4592-a792-74354f1ea3d1/Untitled.png)

```html
**SMI > DOUBLE > PACKED

H_SMI > H_DOUBLE > H_PACKED**
```

**Big Mistake**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd1a69dd-51e7-41e8-a937-2e824a140fe5/15406eed-50fd-4009-8613-6776179b806b/Untitled.png)

**A bit improved version**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd1a69dd-51e7-41e8-a937-2e824a140fe5/50affaff-26d7-4542-8485-e998fc733faf/de363dd1-b7f4-4c66-9cc8-fd91243c0c19.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dd1a69dd-51e7-41e8-a937-2e824a140fe5/576fab34-4434-4f56-b4c2-7630bf676455/Untitled.png)

**Important point to remember:**

- Always prefer in build methods for looping instead of using for, for-of, forEach; because when you use the in build method you can’t even imagine how much it is optimised in every browser engine update.

**Key points:**

- The content or items are called “Array Elements”.
- In Object these content or items are called as “Object properties”.
- Once array is downgraded from Packed SMI element to Packed double element then it cannot be optimised again back to the Packed SMI element. There is no further optimisation possible.
- **Holes are really expensive in JS array.**
*/ 
// 