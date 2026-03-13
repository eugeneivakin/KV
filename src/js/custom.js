jQuery_T4NT(document).ready(function ($) {
  /**
   *  Variant selection changed
   *  data-variant-toggle="{{ variant.id }}"
   */
  $(document).on("variant:changed", async function (evt) {
    const productWrapper = document.querySelector(".t4s-section-main-product");
    const modelData = productWrapper.querySelector(".t4s-main-product__about-model");
    const variantUrl = window.location.href;

    // console.log(evt.currentVariant);

    if (!modelData) return;

    try {
      const response = await fetch(variantUrl, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      if (!response.ok) return;

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const nextModelData = doc.querySelector(".t4s-main-product__about-model");

      if (nextModelData) {
        modelData.innerHTML = nextModelData.innerHTML;
      }
    } catch (error) {
      console.error("Failed to update model block from variant URL:", error);
    }
  });
});
