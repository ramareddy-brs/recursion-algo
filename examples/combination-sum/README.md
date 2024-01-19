## Combintion Sum

The combinationSum function is designed to find all unique combinations of numbers from the given candidates array that add up to the specified target. It utilizes backtracking and recursive techniques to explore different possibilities while maintaining a buffer to keep track of the current combination being constructed. If the buffer's sum equals the target, the combination is stored in the result array.

If the sum exceeds the target or the candidates are exhausted, the function backtracks to explore other possibilities. Ultimately, it returns an array containing all valid combinations of numbers that satisfy the sum condition.