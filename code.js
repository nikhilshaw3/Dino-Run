var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cb11d4ed-c553-45f5-9c12-a4ff71a52ae4","720dce70-f04e-427e-a486-08d668adf973","dc392a89-0ff1-46d4-9a65-f8cab99d6d07","8a22e2c6-cff0-435c-bbe3-0cdf4302a385","acbc334e-9eff-4df0-91df-55dcb3b4a164","0daeb8b2-0be5-4caa-bc85-031930be6acc","b7399688-85d8-4e87-a5a1-60bb0d320b50","ef29a9b6-c001-424e-befa-d1bfc09534d2","6e949349-3dae-4fe0-805e-decc735c4a5c","ed534d47-f6b2-41b8-8e41-b85ff86d1c65","6b991c85-2b16-4971-9577-35c072c3da12","5076e64c-12a5-4cf5-87a0-4670b2f91648","48e6ab7e-5607-41aa-9314-6ade39017c64","5c00b313-e67e-4f89-bcd8-0f774e33158f","8c8b371b-a55e-41e1-9fcc-4457e0294c4f","25eb3c6e-c890-4777-a1d7-c63cf1722eee","83ac37e4-c429-4721-9ff8-5b91996b9e84","28d6a2f3-5e12-4bab-aef9-7cdce6816d42","c0998a4f-ab6a-4bee-a301-ea1318882bfa","d032cff2-4206-45e8-b73d-4e663b9badfd","968c302b-eedd-4869-a290-8ec67c7214d6","3454d50b-762d-4621-ba7d-d22be87988fb","b2abedf5-432a-45d0-aac4-e0bf30348335","29de42c4-b6ca-4d90-bf06-cd85fc5afe97","a1a3e249-b46e-4e1b-b75c-a3caa2825e9b","84634f8e-c8bf-46a4-9e18-88e75ecd81c9","4cd805fb-cc3b-4512-a420-f504b86c5728","8f870676-2774-48d2-8f55-40eb63cbafaa","ccddf822-8569-4846-9679-ea01483bf35d","0e279f1a-30c4-46a7-9b0e-552e2a2d68bd","332742b6-d502-4f8a-ba67-bc2e9537b859","e2e7aba7-7691-4a42-aa4e-992354ce3a00","bb388ec4-f9a1-499f-9cfd-75d7c666db4a"],"propsByKey":{"cb11d4ed-c553-45f5-9c12-a4ff71a52ae4":{"name":"obs1","sourceUrl":null,"frameSize":{"x":83,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"Oc9hc4DtGICw7ghHEMEWB.b7v90jyqxT","loadedFromSource":true,"saved":true,"sourceSize":{"x":83,"y":96},"rootRelativePath":"assets/cb11d4ed-c553-45f5-9c12-a4ff71a52ae4.png"},"720dce70-f04e-427e-a486-08d668adf973":{"name":"log","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"AxR5hE1XjGi066vED_az6TvmYEaOAVrz","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/720dce70-f04e-427e-a486-08d668adf973.png"},"dc392a89-0ff1-46d4-9a65-f8cab99d6d07":{"name":"home","sourceUrl":"assets/v3/animations/WBfVWLp_9nLEF2BP-XyfuRRRbOOKlJiEFHi0bDLzR0Q/dc392a89-0ff1-46d4-9a65-f8cab99d6d07.png","frameSize":{"x":96,"y":76},"frameCount":1,"looping":true,"frameDelay":4,"version":"S78oMLOgYtX2C24ZNCwIfLKdZtNHbACc","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":76},"rootRelativePath":"assets/v3/animations/WBfVWLp_9nLEF2BP-XyfuRRRbOOKlJiEFHi0bDLzR0Q/dc392a89-0ff1-46d4-9a65-f8cab99d6d07.png"},"8a22e2c6-cff0-435c-bbe3-0cdf4302a385":{"name":"cactus","sourceUrl":"assets/v3/animations/WBfVWLp_9nLEF2BP-XyfuRRRbOOKlJiEFHi0bDLzR0Q/8a22e2c6-cff0-435c-bbe3-0cdf4302a385.png","frameSize":{"x":88,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"YgDLKpZEVaxX4GdBbdI3qdqGAPpfNr.O","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":96},"rootRelativePath":"assets/v3/animations/WBfVWLp_9nLEF2BP-XyfuRRRbOOKlJiEFHi0bDLzR0Q/8a22e2c6-cff0-435c-bbe3-0cdf4302a385.png"},"acbc334e-9eff-4df0-91df-55dcb3b4a164":{"name":"lock","sourceUrl":null,"frameSize":{"x":79,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"9WhylfgkQo2KmHACwpEKuMotmO8ivd4o","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":81},"rootRelativePath":"assets/acbc334e-9eff-4df0-91df-55dcb3b4a164.png"},"0daeb8b2-0be5-4caa-bc85-031930be6acc":{"name":"POSTER","sourceUrl":null,"frameSize":{"x":380,"y":470},"frameCount":1,"looping":true,"frameDelay":12,"version":"p5oAPbXd3zt1sUmRQwU98hleXNPIZ.lg","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":470},"rootRelativePath":"assets/0daeb8b2-0be5-4caa-bc85-031930be6acc.png"},"b7399688-85d8-4e87-a5a1-60bb0d320b50":{"name":"setting","sourceUrl":null,"frameSize":{"x":623,"y":401},"frameCount":1,"looping":true,"frameDelay":12,"version":"Qn.MwZ9DujELBU0aePyYM1g4WuErBWPN","loadedFromSource":true,"saved":true,"sourceSize":{"x":623,"y":401},"rootRelativePath":"assets/b7399688-85d8-4e87-a5a1-60bb0d320b50.png"},"ef29a9b6-c001-424e-befa-d1bfc09534d2":{"name":"story","sourceUrl":null,"frameSize":{"x":414,"y":414},"frameCount":1,"looping":true,"frameDelay":12,"version":"2kI9JamPSkIPlHfYenuGhg0UfeCH7ddw","loadedFromSource":true,"saved":true,"sourceSize":{"x":414,"y":414},"rootRelativePath":"assets/ef29a9b6-c001-424e-befa-d1bfc09534d2.png"},"6e949349-3dae-4fe0-805e-decc735c4a5c":{"name":"BACK","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/6e949349-3dae-4fe0-805e-decc735c4a5c.png","frameSize":{"x":125,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"mOeOVTCcZB75dZQaP5thPy3ek.9adTwV","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":125},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/6e949349-3dae-4fe0-805e-decc735c4a5c.png"},"ed534d47-f6b2-41b8-8e41-b85ff86d1c65":{"name":"PLAY.png_1","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":5,"looping":true,"frameDelay":2,"version":"ONbepXV38dzmuo4B.nj7cHbI2_K9hI_l","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":450},"rootRelativePath":"assets/ed534d47-f6b2-41b8-8e41-b85ff86d1c65.png"},"6b991c85-2b16-4971-9577-35c072c3da12":{"name":"1.","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/6b991c85-2b16-4971-9577-35c072c3da12.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"rS4n6Dao7ZrLWFUmKU_coE.gdmKfLgrq","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/6b991c85-2b16-4971-9577-35c072c3da12.png"},"5076e64c-12a5-4cf5-87a0-4670b2f91648":{"name":"2.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/5076e64c-12a5-4cf5-87a0-4670b2f91648.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"r4KSjcSaf_2mHtZsuCl2mu4ZM3dhL25y","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/5076e64c-12a5-4cf5-87a0-4670b2f91648.png"},"48e6ab7e-5607-41aa-9314-6ade39017c64":{"name":"3.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/48e6ab7e-5607-41aa-9314-6ade39017c64.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"mabClTcoXvQGW4VqxBRkV5qSZKkMibi.","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/48e6ab7e-5607-41aa-9314-6ade39017c64.png"},"5c00b313-e67e-4f89-bcd8-0f774e33158f":{"name":"4.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/5c00b313-e67e-4f89-bcd8-0f774e33158f.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"PNPa7T6xOJHkjR7JK3LX8b.4HAGvHBYq","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/5c00b313-e67e-4f89-bcd8-0f774e33158f.png"},"8c8b371b-a55e-41e1-9fcc-4457e0294c4f":{"name":"5.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/8c8b371b-a55e-41e1-9fcc-4457e0294c4f.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"P.oyYf14I70jd5Rot5PcOqNYwfxNNWJN","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/8c8b371b-a55e-41e1-9fcc-4457e0294c4f.png"},"25eb3c6e-c890-4777-a1d7-c63cf1722eee":{"name":"6","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/25eb3c6e-c890-4777-a1d7-c63cf1722eee.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"x15ffUuNvKcMkkZAzp4_UF3_6pOLlgNJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/25eb3c6e-c890-4777-a1d7-c63cf1722eee.png"},"83ac37e4-c429-4721-9ff8-5b91996b9e84":{"name":"7.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/83ac37e4-c429-4721-9ff8-5b91996b9e84.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"UxSDXbtTiXuo5sainglVHsZw2xtiirfY","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/83ac37e4-c429-4721-9ff8-5b91996b9e84.png"},"28d6a2f3-5e12-4bab-aef9-7cdce6816d42":{"name":"8.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/28d6a2f3-5e12-4bab-aef9-7cdce6816d42.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"N.avm341ZX36jGmfq5J7QGu_0Nxu_8p0","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/28d6a2f3-5e12-4bab-aef9-7cdce6816d42.png"},"c0998a4f-ab6a-4bee-a301-ea1318882bfa":{"name":"9.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/c0998a4f-ab6a-4bee-a301-ea1318882bfa.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"szj0n5.HQSQ18ea0ZAxi.DMAQIhrOIdL","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/c0998a4f-ab6a-4bee-a301-ea1318882bfa.png"},"d032cff2-4206-45e8-b73d-4e663b9badfd":{"name":"10.png_1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/d032cff2-4206-45e8-b73d-4e663b9badfd.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"76tQS9iDGVwuNCVKTH9X7PMdi4xLEq81","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/d032cff2-4206-45e8-b73d-4e663b9badfd.png"},"968c302b-eedd-4869-a290-8ec67c7214d6":{"name":"back1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/968c302b-eedd-4869-a290-8ec67c7214d6.png","frameSize":{"x":700,"y":351},"frameCount":1,"looping":true,"frameDelay":4,"version":"cugL14qFI3r6cLm7.68V_j79LJ0bdV9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":351},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/968c302b-eedd-4869-a290-8ec67c7214d6.png"},"3454d50b-762d-4621-ba7d-d22be87988fb":{"name":"1.png_1","sourceUrl":null,"frameSize":{"x":261,"y":127},"frameCount":8,"looping":true,"frameDelay":3,"version":"3Ce21rxx5.K3jly.qzyOJLmsaGVs.guP","loadedFromSource":true,"saved":true,"sourceSize":{"x":522,"y":508},"rootRelativePath":"assets/3454d50b-762d-4621-ba7d-d22be87988fb.png"},"b2abedf5-432a-45d0-aac4-e0bf30348335":{"name":"back3","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/b2abedf5-432a-45d0-aac4-e0bf30348335.png","frameSize":{"x":600,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"d.M4aUe0pCNatC8p8PQrAtdww3e49IAq","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":400},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/b2abedf5-432a-45d0-aac4-e0bf30348335.png"},"29de42c4-b6ca-4d90-bf06-cd85fc5afe97":{"name":"ground_grass_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ob_82sFDBfxzTsmevhTazDGxLmup3Kp/category_environment/ground_grass_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ob_82sFDBfxzTsmevhTazDGxLmup3Kp","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ob_82sFDBfxzTsmevhTazDGxLmup3Kp/category_environment/ground_grass_broken.png"},"a1a3e249-b46e-4e1b-b75c-a3caa2825e9b":{"name":"level completed","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/a1a3e249-b46e-4e1b-b75c-a3caa2825e9b.png","frameSize":{"x":467,"y":467},"frameCount":1,"looping":true,"frameDelay":4,"version":"txHy3Mk7ciPt0bJ7hos3HhvexJkn.9XH","loadedFromSource":true,"saved":true,"sourceSize":{"x":467,"y":467},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/a1a3e249-b46e-4e1b-b75c-a3caa2825e9b.png"},"84634f8e-c8bf-46a4-9e18-88e75ecd81c9":{"name":"game over","sourceUrl":null,"frameSize":{"x":469,"y":306},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ex81CuhX70xMOzblbK3p_1iXLjwOJ58T","loadedFromSource":true,"saved":true,"sourceSize":{"x":469,"y":306},"rootRelativePath":"assets/84634f8e-c8bf-46a4-9e18-88e75ecd81c9.png"},"4cd805fb-cc3b-4512-a420-f504b86c5728":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"},"8f870676-2774-48d2-8f55-40eb63cbafaa":{"name":"8mQeSam4QKu9.jpg_1","sourceUrl":null,"frameSize":{"x":724,"y":202},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y7LCuwhGW6PotuuK2b8Cr2K5Uqo9yfQh","loadedFromSource":true,"saved":true,"sourceSize":{"x":724,"y":202},"rootRelativePath":"assets/8f870676-2774-48d2-8f55-40eb63cbafaa.png"},"ccddf822-8569-4846-9679-ea01483bf35d":{"name":"o1","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/ccddf822-8569-4846-9679-ea01483bf35d.png","frameSize":{"x":164,"y":167},"frameCount":1,"looping":true,"frameDelay":4,"version":"FTBCHNAoM3_FYTAwFtzHW_orICdxR0nr","loadedFromSource":true,"saved":true,"sourceSize":{"x":164,"y":167},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/ccddf822-8569-4846-9679-ea01483bf35d.png"},"0e279f1a-30c4-46a7-9b0e-552e2a2d68bd":{"name":"o2","sourceUrl":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/0e279f1a-30c4-46a7-9b0e-552e2a2d68bd.png","frameSize":{"x":153,"y":155},"frameCount":1,"looping":true,"frameDelay":4,"version":"4XTjMZfOiS4gt2HZ6q5q8fjTuA8JNUWY","loadedFromSource":true,"saved":true,"sourceSize":{"x":153,"y":155},"rootRelativePath":"assets/v3/animations/xRpd3dWc-d_y3N-_cMfuCzbiXwgXrqkzZC9IWfBEOBw/0e279f1a-30c4-46a7-9b0e-552e2a2d68bd.png"},"332742b6-d502-4f8a-ba67-bc2e9537b859":{"name":"o3","sourceUrl":null,"frameSize":{"x":151,"y":335},"frameCount":1,"looping":true,"frameDelay":12,"version":"nRU3yD8R1Pk2GIn9jUZ16GI.tTCC4Yv1","loadedFromSource":true,"saved":true,"sourceSize":{"x":151,"y":335},"rootRelativePath":"assets/332742b6-d502-4f8a-ba67-bc2e9537b859.png"},"e2e7aba7-7691-4a42-aa4e-992354ce3a00":{"name":"VlsmKVOvpRqN.png_1","sourceUrl":null,"frameSize":{"x":882,"y":504},"frameCount":1,"looping":true,"frameDelay":12,"version":"SIWtAobBnH6kp3cCEi_7GlS.XceR9SFm","loadedFromSource":true,"saved":true,"sourceSize":{"x":882,"y":504},"rootRelativePath":"assets/e2e7aba7-7691-4a42-aa4e-992354ce3a00.png"},"bb388ec4-f9a1-499f-9cfd-75d7c666db4a":{"name":"1365442XLAFDE7U.jpg_1","sourceUrl":null,"frameSize":{"x":376,"y":580},"frameCount":1,"looping":true,"frameDelay":12,"version":"6Tc0vNheuIJCLhT5hb4s3q0jDkMPAOsj","loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":580},"rootRelativePath":"assets/bb388ec4-f9a1-499f-9cfd-75d7c666db4a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 //states
var start = 0;
var story = 1;
var level1 = 0;
var level2 = 0;
var level3 = 0;
var level4 = 0;
var level5 = 0; 
var level6 = 0;
var level7 = 0;
var level8 = 0;
var level9 = 0;
var level10 = 0;
var win = 3;
var lose = 4;
var complete = 5;
var gameState=start;

//groups
obsgroup = createGroup();
poin = createGroup()

//level 
var level = 10
var life = 5;
var energy = 0

//background
var poster = createSprite(200,200);
poster.setAnimation("POSTER");
poster.width = 400;
poster.height = 400;

var back1 = createSprite(200,200,400,400)
back1.setAnimation("back1")
back1.width = 400;
back1.height = 400;
back1.visible = false;

var back2 = createSprite(200,200,400,400)
back2.setAnimation("back3")
back2.width = 400;
back2.height = 400;
back2.visible = false;

//setting
var setting = createSprite(330,50);
setting.setAnimation("setting");
setting.scale = 0.2;
setting.rotationSpeed = 3;

//play button
var play = createSprite(200,330);
play.setAnimation("PLAY.png_1");
play.width = 140;
play.height = 110;


complete = createSprite(200,200);
complete.setAnimation("VlsmKVOvpRqN.png_1");
complete.width = 400;
complete.height = 400;
complete.visible = false;

cong = createSprite(200,280);
cong.setAnimation("1365442XLAFDE7U.jpg_1")
cong.width = 200;
cong.height = 300;
cong.visible = false;


//story
var store=createSprite(200,200);
store.setAnimation("story");
store.visible = false;
store.width = 400;
store.height = 400;

var b = createSprite(55,300);
b.setAnimation("BACK");
b.scale = 0.7;
b.visible = false;

//invisible ground
var ini = createSprite(200,350,40000,10);
ini.visible = false;

//dino
var dino = createSprite(320,330);
dino.setAnimation("1.png_1");
dino.scale = 0.6;
dino.visible = false;
dino.setCollider("circle",0,0,40);


//back button
var back = createSprite(55,50);
back.setAnimation("BACK");
back.scale = 0.6;
back.visible = false;

//level animation
level1 = createSprite(55,110);
level1.setAnimation("1.");
level1.scale = 0.3;
level1.visible = false;

level2 = createSprite(145,110);
level2.setAnimation("2.png_1");
level2.scale = 0.3;
level2.visible = false;

level3 = createSprite(235,110);
level3.setAnimation("3.png_1");
level3.scale = 0.3;
level3.visible = false;

level4 = createSprite(325,110);
level4.setAnimation("4.png_1");
level4.scale = 0.3;
level4.visible = false;

level5 = createSprite(55,200);
level5.setAnimation("5.png_1");
level5.scale = 0.3;
level5.visible = false;

level6 = createSprite(145,200);
level6.setAnimation("6");
level6.scale = 0.3;
level6.visible = false;

level7 = createSprite(235,200);
level7.setAnimation("7.png_1");
level7.scale = 0.3;
level7.visible = false;

level8 = createSprite(325,200);
level8.setAnimation("8.png_1");
level8.scale = 0.3;
level8.visible = false;

level9 = createSprite(145,290);
level9.setAnimation("9.png_1");
level9.scale = 0.3;
level9.visible = false;

level10 = createSprite(235,290);
level10.setAnimation("10.png_1");
level10.scale = 0.3;
level10.visible = false;

//locks
lock = createSprite(140,120);
lock.setAnimation("lock");

lock1 = createSprite(230,120);
lock1.setAnimation("lock");

lock2 = createSprite(320,120);
lock2.setAnimation("lock");

lock3 = createSprite(50,210);
lock3.setAnimation("lock");

lock4 = createSprite(140,210);
lock4.setAnimation("lock");

lock5 = createSprite(230,210);
lock5.setAnimation("lock");

lock6 = createSprite(320,210);
lock6.setAnimation("lock");

lock7 = createSprite(140,300);
lock7.setAnimation("lock");

lock8 = createSprite(230,300);
lock8.setAnimation("lock");

//particle
lockp = createSprite(200,200);
lockp.setAnimation("lock");
lockp.visible = false;


levelbutton = createSprite(200,350);
levelbutton.setAnimation("8mQeSam4QKu9.jpg_1");
levelbutton.width = 150;
levelbutton.height = 80;
levelbutton.visible = false;

winscreen = createSprite(200,180);
winscreen.setAnimation("level completed");
winscreen.width = 400;
winscreen.height = 360;
winscreen.visible = false;

over = createSprite(200,140);
over.setAnimation("game over");
over.visible = false;

e = createSprite(400,200,30,400);
e.shapeColor = "black";
e.visible = false;

l1 = createSprite(400,200,10,10);
l1.visible = false;

l2 = createSprite(400,200,10,10);
l2.visible = false;

l3 = createSprite(400,200,10,10);
l3.visible = false;

l4 = createSprite(400,200,10,10);
l4.visible = false;

l5 = createSprite(400,200,10,10);
l5.visible = false;

l6 = createSprite(400,200,10,10);
l6.visible = false;

l7 = createSprite(400,200,10,10);
l7.visible = false;

l8 = createSprite(400,200,10,10);
l8.visible = false;

l9 = createSprite(400,200,10,10);
l9.visible = false;

l10 = createSprite(400,200,10,10);
l10.visible = false;

//lock visible
lock8.visible = false;
lock7.visible = false;
lock6.visible = false;
lock5.visible = false;
lock4.visible = false;
lock3.visible = false;
lock2.visible = false;
lock1.visible = false;
lock.visible = false;

function draw() {
background("black");
if(gameState === level){
e.visible = true;
}else{
e.visible = false;
}
//mouse presed button
if(gameState===level && mousePressedOver(level1)){
gameState = level1;
}



if(gameState === complete){
complete.visible = true;
cong.visible = true;
back2.visible = false;
b.visible = true;

dino.visible = false;
obsgroup.setVisibleEach(false);
poin.setVisibleEach(false);

if(mousePressedOver(b)){
gameState = level;
cong.visible = false;
complete.visible = false;
b.visible = false


if(gameState === story){
back.visible = true;
}
}
}else{
  cong.visible = false;
  complete.visible = false;
  b.visible = false;
}

if(gameState === level9){
 
if(poin.isTouching(dino)){
energy = energy+5;
poin.destroyEach();
}

if(energy === 100){
gameState = win;
}

//back velocity & reset
back1.velocityX = 5

back1.height = 600;
back1.width = 550;

if(back1.x>280){
  back1.x = 200
}
back1.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();



back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back1)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs8();
}

if(World.frameCount%250===0){
obs6();
}

if(World.frameCount%320===0){
obs1
}

if(back1.x>250){
back1.x = 140;
}
}

//level5
if(gameState === level7){
 
if(poin.isTouching(dino)){
energy = energy+4;
poin.destroyEach();
}

if(energy === 80){
gameState = win;
}

//back velocity & reset
back1.velocityX = 5

back1.height = 600;
back1.width = 550;

if(back1.x>280){
  back1.x = 200
}
back1.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();



back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back1)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs8();
}

if(World.frameCount%250===0){
obs6();
}

if(back1.x>250){
back1.x = 140;
}
}

if(gameState === level8){
 
if(poin.isTouching(dino)){
energy = energy+5;
poin.destroyEach();
}

if(energy === 90){
gameState = win;
}

//back velocity & reset
back2.velocityX = 5


back2.width = 600
back2.height = 500;

if(back1.x>280){
  back1.x = 200
}
back2.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();



back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back2)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs7();
}

if(World.frameCount%250===0){
obs4();
}

if(back2.x>250){
back2.x = 140;
}
  
}

if(gameState === level10){
 
if(poin.isTouching(dino)){
energy = energy+5;
poin.destroyEach();
}

if(energy === 120){
gameState = complete;
}

//back velocity & reset
back2.velocityX = 5


back2.width = 600
back2.height = 500;

if(back1.x>280){
  back1.x = 200
}
back2.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();



back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back2)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs7();
}

if(World.frameCount%250===0){
obs8();
}


if(back2.x>250){
back2.x = 140;
}
  
}

//update sprites
mouse();
level1state();
WIN();
loss();
levelstate();
stor();
startstate();
level2state();
level3state();
level4state();
level5state();
level6state();
mouselock();

drawSprites();

//level 1 score and lives text
if(gameState===level1){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/20",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level2){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/30",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level3){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/40",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level4){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/50",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level5){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/60",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level6){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/70",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level7){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/80",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level8){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/90",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level9){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/100",20,30);
text("LIVES : "+ life,270,30);
}

if(gameState===level10){
e.visible = false;
textSize(25);
fill("black");
stroke("black");
strokeWeight(1.7)
text("SCORE : "+ energy +"/120",20,30);
text("LIVES : "+ life,270,30);
}


}

//function obstacles
function score(){
if(World.frameCount%40===0){
var point = createSprite(0,randomNumber(300,100));
point.setAnimation("coin_gold_1");
point.velocityX = 5;
point.scale = 0.5;
poin.add(point)
}
}

//function obstacles
function obs1(){
var p5 = createSprite(0,300);
p5.setAnimation("obs1");
p5.velocityX = 10;
p5.scale = 0.8
obsgroup.add(p5);
}

function obs2(){
var p1 = createSprite(0,330);
p1.setAnimation("log");
p1.velocityX = 7;
p1.scale = 1;
obsgroup.add(p1);
}

function obs3(){
var p2 = createSprite(0,60);
p2.setAnimation("up down");
p2.velocityX = 10;
p2.scale = 1.2;
obsgroup.add(p2);
}

function obs4(){
var obs = createSprite(0,320);
obs.setAnimation("cactus");
obs.velocityX = 5;
obs.scale = 1;
obsgroup.add(obs);

if(gameState === level4){
obs.y = 260;
}else{
  obs.y = 320;
}
}

function obs6(){
var o = createSprite(0,290);
o.setAnimation("o1");
o.velocityX = 8;
o.scale = 0.5
o.rotationSpeed = -7
obsgroup.add(o);
}

function obs7(){
var q1 = createSprite(0,290);
q1.setAnimation("o2");
q1.velocityX = 5;
q1.scale = 0.5
q1.rotationSpeed = -7;
obsgroup.add(q1);
}

function obs8(){
var obs1 = createSprite(0,280);
obs1.setAnimation("o3");
obs1.velocityX = 7;
obs1.scale = 0.4
//obs1.rotationSpeed = -7
obsgroup.add(obs1);
}

function mouse(){

//mouse preesed for story
if(mousePressedOver(setting)&&gameState===start){
setting.visible = false;
poster.visible = false
gameState=story
}

//if(gameState===story)
if(gameState===story){

//visilbe 
store.visible = true;
back.visible = true;

//mouseprseed for gameStae start
if(mousePressedOver(back)){
gameState=start ;
store.visible = false;
back.visible = false;
poster.visible = true;
setting.visible = true;
}
}
}

function level1state(){
//if gameState===level1
if(gameState===level1){

if(World.frameCount%100===0){
  obs2();
}

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life===0){
gameState = lose;
}

if(keyDown("space")&&dino.y>=250||mousePressedOver(back1)&&dino.y>=250){
dino.velocityY = -25
}else{
dino.velocityY = dino.velocityY +0.8;
}

//visible 
back.visible = false;
back1.visible = true;
dino.visible = true;

back1.y = 200;


//callig points
score();

if(energy===20){
gameState=win
}

dino.velocityY = dino.velocityY+0.8;
dino.collide(ini);

//back velocity & reset
back1.velocityX = 5

back1.height = 600;
back1.width = 550;

if(back1.x>280){
  back1.x = 200
}

if(poin.isTouching(dino)){
energy = energy+2;
poin.destroyEach();
}
}
}

function WIN(){
  
if(gameState===win){
back1.visible = false;
back2.visible = false;
dino.visible = false;
poin.setVisibleEach(false);
levelbutton.visible = true;
winscreen.visible = true;
obsgroup.setVisibleEach(false);
if(mousePressedOver(levelbutton)){
gameState = level;
winscreen.visible = false;
levelbutton.visible = false
energy = 0;
life = 5;
dino.y = 300
}
levelbutton.depth = winscreen.depth+1;
}

}

function loss(){
  
if(gameState===lose){
back1.visible = false;
back2.visible = false
obsgroup.setVisibleEach(false);
poin.setVisibleEach(false);
over.visible = true;
dino.visible = false;
levelbutton.visible = true;
if(mousePressedOver(levelbutton)){
gameState = level;
over.visible = false;
levelbutton.visible = false;
energy = 0;
life = 5;
}
}
  
}

function levelstate(){

if(gameState === level){
  
dino.y = 260;

lock8.visible = true;
lock7.visible = true;
lock6.visible = true;
lock5.visible = true;
lock4.visible = true;
lock3.visible = true;
lock2.visible = true;
lock1.visible = true;
lock.visible = true;
  
if(lock2.x === 400 && mousePressedOver(level4)){
gameState = level4;
}

if(lock1.x === 400 && mousePressedOver(level3)){
gameState = level3;
}

if(lock3.x === 400 && mousePressedOver(level5)){
gameState = level5;
}
  
//texte
stroke("white")
fill("white")
textSize(20)
text("CHOOSE THE LEVELS TO PLAY",40,50)
  
back.visible = true;
back.y = 340;
back.scale = 0.9

//visible 
poster.visible = false;
play.visible = false;
setting.visible = false;
level1.visible = true;
level2.visible = true;
level3.visible = true;
level4.visible = true;
level5.visible = true;
level6.visible = true;
level7.visible = true;
level8.visible = true;
level9.visible = true;
level10.visible = true;
}else{
  level1.visible = false;
level2.visible = false;
level3.visible = false;
level4.visible = false;
level5.visible = false;
level6.visible = false;
level7.visible = false;
level8.visible = false;
level9.visible = false;
level10.visible = false;
lock8.visible = false;
lock7.visible = false;
lock6.visible = false;
lock5.visible = false;
lock4.visible = false;
lock3.visible = false;
lock2.visible = false;
lock1.visible = false;
lock.visible = false;
}

}

function stor(){

//if(gameState===story)
if(gameState===story){
back.scale = 0.6;
back.y = 50;
}

if(mousePressedOver(back)&&gameState===level){
poster.visible = true;
back.visible = false;
gameState=start;
}
}

function startstate(){

if(gameState===start){
poster.visible = true;
setting.visible = true;
play.visible = true
//e.visible = true;
}

if(gameState===start && mousePressedOver(play)){
gameState = level
}

if(mouseIsOver(play)){
play.width = 200;
play.height = 160;
}else{
  play.width = 140;
  play.height = 110;
}
}

function level2state(){
if(gameState === level2){
 
if(poin.isTouching(dino)){
energy = energy+2;
poin.destroyEach();
}

if(energy === 30){
gameState = win;
}

back2.velocityX = 5;
if(back2.x>250){
back2.x = 200;
}

back2.width = 600
back2.height = 500;

back2.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();
back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back2)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs4();
}
}
}

function level3state(){
//level3
if(gameState === level3){
 
if(poin.isTouching(dino)){
energy = energy+2;
poin.destroyEach();
}

if(energy === 40){
gameState = win;
}

back1.visible = true;
//back velocity & reset
back1.velocityX = 5

back1.height = 600;
back1.width = 550;

if(back1.x>280){
  back1.x = 200
}

if(energy === 40){
gameState = win;
}
  
if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();

back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back1)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs1();
}
}
}

function level4state(){
if(gameState === level4){
 
if(poin.isTouching(dino)){
energy = energy+2;
poin.destroyEach();
}

if(energy === 50){
gameState = win;
}

back2.velocityX = 5;
if(back2.x>250){
back2.x = 200;
}

back2.width = 600
back2.height = 500;

back2.visible = true;
  
if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();

back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back2)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs6();
}

}else{
  ini.y = 350;
}
}

function level5state(){
//level5
if(gameState === level5){
 
if(poin.isTouching(dino)){
energy = energy+2;
poin.destroyEach();
}

if(energy === 60){
gameState = win;
}

//back velocity & reset
back1.velocityX = 5

back1.height = 600;
back1.width = 550;

if(back1.x>280){
  back1.x = 200
}
back1.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();



back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back1)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs8();
}

if(back1.x>250){
back1.x = 140;
}
}else{
  back1.y = 200;
} 
}

function level6state(){

if(gameState === level6){
 
if(poin.isTouching(dino)){
energy = energy+2;
poin.destroyEach();
}

if(energy === 70){
gameState = win;
}

//back velocity & reset
back2.velocityX = 5


back2.width = 600
back2.height = 500;

if(back1.x>280){
  back1.x = 200
}
back2.visible = true;

if(obsgroup.isTouching(dino)){
life = life-1;
obsgroup.destroyEach();
}

if(life === 0){
gameState = lose
}
  
score();



back.visible = false;
dino.visible = true;
e.visible = false;
dino.collide(ini)

if(keyDown("space")&&dino.y>=250||mousePressedOver(back2)&&dino.y>=250){
dino.velocityY = -16
}else{
dino.velocityY = dino.velocityY +0.8;
}

if(World.frameCount%100===0){
obs7();
}

if(back2.x>250){
back2.x = 140;
}
  
}

}

function mouselock(){
  
if(gameState === level1 && energy >= 18){
lockp.x = 0;
}

if(gameState === level2 && energy >= 28){
l1.x = 0;
}

if(gameState === level3 && energy >= 38){
l2.x = 0;
}

if(gameState === level4 && energy >= 48){
l3.x = 0;
}

if(gameState === level5 && energy >= 58){
l5.x = 0;
}

if(gameState === level6 && energy >= 68){
l6.x = 0;
}

if(gameState === level7 && energy >= 76){
l7.x = 0;
}

if(gameState === level8 && energy >= 85){
l8.x = 0;
}

if(gameState === level9 && energy >= 95){
l9.x = 0;
}

if(gameState === level10 && energy >= 115){
l10.x = 0;
}

if(l1.x === 0){
lock1.x = 400;
}

if(l2.x === 0){
lock2.x = 400;
}

if(l3.x === 0){
lock3.x = 400;
}

if(l5.x === 0){
lock4 .x = 400;
}

if(l6.x === 0){
lock5.x = 400;
}

if(l7.x === 0){
lock6.x = 400;
}

if(l8.x === 0){
lock7.x = 400;
}

if(l9.x === 0){
lock8 .x = 400;
}
  
if(lock.x===400){
lock.visible = false;
}

if(lock4.x === 400  && gameState === level &&  mousePressedOver(level6)){
gameState = level6;
}

if(lock5.x === 400  && gameState === level &&  mousePressedOver(level7)){
gameState = level7;
}

if(lock6.x === 400  && gameState === level &&  mousePressedOver(level8)){
gameState = level8;
}

if(lock7.x === 400  && gameState === level &&  mousePressedOver(level9)){
gameState = level9;
}

if(lock8.x === 400  && gameState === level &&  mousePressedOver(level10)){
gameState = level10;
}

if(lockp.x === 0){
lock.x = 400;
lock.visible = false;
}


if(gameState === level && lockp.x === 0){
lock.visible = false;
lock.x = 400;
}

if(lock.x === 400 && gameState === level && mousePressedOver(level2)){
gameState = level2;
}

  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
