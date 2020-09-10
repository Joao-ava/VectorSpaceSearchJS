class VectorCompare {
  magnitude(concordance) {
    const total = Object.keys(concordance).reduce((total, key) => {
      return total + concordance[key] ** 2;
    }, 0);
    return Math.sqrt(total);
  }

  relation(concordance1, concordance2) {
    const concordanceOneKeys = Object.keys(concordance1);
    const topValue = concordanceOneKeys.reduce((top, word) => {
      if (!concordance2.hasOwnProperty(word)) return top;
      return top + concordance1[word] * concordance2[word];
    }, 0);

    if (this.magnitude(concordance1) * this.magnitude(concordance2) == 0)
      return 0;

    return (
      topValue / (this.magnitude(concordance1) * this.magnitude(concordance2))
    );
  }

  concordance(text) {
    const concord = {};
    const textArray = text.split(" ");

    textArray.forEach((word) => {
      if (concord.hasOwnProperty(word)) {
        concord[word] += 1;
        return;
      }

      concord[word] = 1;
    });

    return concord;
  }
}

module.exports = VectorCompare;
