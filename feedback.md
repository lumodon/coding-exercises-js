# 1. Abstraction 
There is confusion based on if one should write a function for any case, or for specific cases.
example: json: should we hard-code a double for loop to look for 4chan since that's the example?
If hardcoded, this reduces one's ability to figure out how to work with abstract solutions.

Potential solutions:
- Perhaps write something in the instructions that explicitly states this
- Use pre-written tests that cover all cases, let the learner focus soley on the exercise, not on testing.

# 2. Exercise: Find-The-Parens
Trying to understand what is considered "Too many parenthesis" is very confusing. By the given definition, "If you can remove a set of parenthesis and still have parenthesis" I understand that to mean the following for each example:
```
Given                 My Interpretation     Given answer
((1((23)(45)))6)      (1(23)(45))6          ((1((23)(45)))6)
(((1234)(((5)67))))   (1234)((5)67)         ((1234)((5)67))
12((3))               12(3)                 12(3)
```

But it appears I'm misunderstanding how many parenthesis allow for the condition "still have parenthesis"

Not sure how to reword this either. Just pointing out that I'm confused.

# 3. Redundant Specs:
Copy of message to #144 channel:
```
@here Hey looking at the specs here, some of the specs are redundant - that is, if I don't complete all 15 exercises, not only do I lose the 'checkmark' for those particular exercises, I also lose the checkmark for `Tests and correct implementations exist for the following exercises (it is recommended that you complete them in this order):`
Also, if I spend a few hours on an exercise and never completed it, do I get zero credit for it as far as completion goes? And do I also lose the checkmark `All tests are passing` even though all my other tests are passing? How is completion actually rated for this project?
```

*TL;DR* Version:  
Some of the checkboxes for the specs should be headers instead of checkboxes themselves. The spec for 'all tests passing' should be rewritten to 'all tests for completed exercises passing'