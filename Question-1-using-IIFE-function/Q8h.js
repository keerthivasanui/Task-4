(function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([5,7,8,9],2)