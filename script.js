const data = {
  Argumentative: {
    "Definition": `Argumentative text is a text that is used to persuade someone to do or not do something. Argumentative text expresses the reasons for an opinion, an idea, or a belief.`,

    "Purpose": `To persuade someone to do or not do something, and to express the reasons for an opinion, an idea, or a belief.`,

    "Structure": `Structure of an Argumentative Text:

1. Thesis
It introduces the issue and the writers' point of view about the issue of the topic.

2. Arguments
They elaborate and provide several reasons to the readers about the writers' arguments in order to support the writers' point of view about the issue on the thesis statement.

3. Conclusion/Reiteration
It presents the summary of all the arguments which have been elaborated before.`,

    "Language Features": ` 
1. Abstract Nouns
example words : love (cinta), bravery (pemberani), justice (keadilan)

    “Palestinians have the right to self-determination"
    “Security should not come at the cost of humanitarian suffering"
    “Only through justice, dialogue, and recognition of each other’s rights can long-lasting peace be achieved.”

2. Technical Terms
example words : photosynthesis (fotosintesis), torque (torsi), debugging (debug)

    “Palestinians in the West Bank and Gaza have suffered from restrictions, blockades, and displacement.”
    “The establishment of a recognized Palestinian state should be considered as an urgent solution.”
    “The international community should play a more active role.”

3. Modal Auxiliaries
example words : should (harus), may ( mungkin), must (harus banget), can (bisa)

    “Israel should use its power responsibly.”
    “Hamas must also change its approach.”
    “The international community should play a more active role.”

4. Temporal Connectives
example words : firstly (pertama), secondly (kedua), finally (akhirnya)

    "First of all, Palestinians have the right to self-determination.”
    "Secondly, Israel should use its power responsibly.”
    "Thirdly, Hamas must also change its approach.”
    “Finally, the international community should play a more active role.”

5. Present Tense
formula : S+V1(s/es)+O

    “Israel argues that it needs security, but excessive control creates more anger and resistance.”
    “Hamas represents the voice of many Palestinians.”
    “Violence cannot bring a permanent solution.”`
  },

  Hortatory: {
    "Definition": `A hortatory text is a type of text, either spoken or written, that aims to persuade the audience to take a particular action or adopt a certain viewpoint.`,

    "Purpose": `The primary purpose of a hortatory text is to persuade the reader or listener that something should or should not be the case or done.`,

    "Structure": `
1. Thesis
It introduces the issue and the writer’s point of view about the issue of the topic.

2. Arguments
They elaborate and provide several reasons to the reader about the writer’s arguments in order to support the writer’s viewpoint about the issue on the thesis element.

3. Recommendation
It presents the writer’s point of view and recommendation regarding the topic of the text.`,

    "Language Features": `
1. Present Tense
 Formula : S+V1(s/es)+O

    a. Israel still has overall control of the West Bank but since the 1990s, a Palestinian government – known as the Palestinian Authority – has run most of its towns and cities.
    b. It says the biggest settlements at the very least are permanent and that all settlements are rooted in its historical rights.

2. Connective / Conjunctions
example words : firstly (pertama), secondly (kedua), finally (akhirnya)

     a. First of all, Palestinian have the right to self-determination.
     b. Secondly, Israel, as a powerful state with strong military and intelligence.

3. Evaluative Words
example words : criticizes (mengkritik), questions (pertanyaan), celebrates (merayakan)

     a. The Israeli-Palestinian conflict, particularly involving Hamas, has been one of the most critical global issues for decades.
     b. I strongly believe that peace can only be achieved if Israel respects the rights of Palestinians, while Hamas should abandon violence as a solution.

4. Auxiliary Verbs
example words : have, has, had , do, did

     a. Peace can only be achieved if Israel respects the right of Palestinians.
     b. The International community should play more active role.

5. Thinking Verbs
example words : believe (percaya), think (berpikir), understand (paham)

     a. I strongly believe that peace can only be achieved if Israel respects the right of Palestinians, while Hamas should abandon violence as a solution.
     b. I think that Israel is a terrorist

6. Action Verbs
example words : run (lari), jump (lompat), write (menulis)

     a. The International community should play more an active role.
     b. Excessive control and attacks on Gaza have created more anger and resistance.`
  },

  Discussion: {
    "Definition": `Discussion text is a type of text that presents a problematic discourse or issue by exploring arguments and information from different points of view.`,

    "Purpose": `To present arguments and information from different points of view.`,

    "Structure": `Schematic Structure
1. Statement of Issue: 
Tells the reader the problem and what will be argued about it. Gives information about the issue and how.

2. Arguments for:
Tells the reader points to be developed.

3. Arguments against:
Tells the reader points to be developed.

4. Recommendation:
Tells the reader the position held by the writer. It is also presented at the most logical conclusion. It recommends a final position on the issue.`,

    "Language Features": `
1. Generic Participants
example: Palestinians, Israelis, Hamas, international community

2. Simple Present
        Formula : S+V1(s/es)+O
“Violence has never produced a lasting solution.”

3. Thinking Verb
example : Believe (percaya), Understand (paham), Think (berpikir)
“I believe that peaceful negotiation should be the priority.”

4. Modality 
example : should (harus), may (mungkin), must (harus), can (bisa)
“Military actions should not be the main path to peace.”

5. Contrastive Conjunction
example : but (tapi), although (meskipun), though (meskipun)  
“On the other hand, violence has never produced a lasting solution.”

6. Passive Voice 
“Innocent people are often killed in Gaza."`
  }
};

let currentType = null;

    function showSubmenu(type) {
      currentType = type;
      let html = "";
      Object.keys(data[type]).forEach(key => {
        html += `<div class='submenu' onclick="showContent('${key}')">${key}</div>`;
      });
      document.getElementById("submenu").innerHTML = html;
      document.getElementById("content").innerHTML = "";
    }

    function showContent(detail) {
      const text = data[currentType][detail];
      document.getElementById("content").innerHTML = `<div class='card'><h3>${detail}</h3><p>${text}</p></div>`;
    }

     // --- FUNGSI BARU UNTUK KUIS ---

    function startQuiz() {
      // Bersihkan submenu dan konten sebelumnya
      document.getElementById("submenu").innerHTML = "";
      document.getElementById("content").innerHTML = "";
      
      // Reset state kuis
      currentQuestionIndex = 0;
      score = 0;
      generateQuestions();
      displayQuestion();
    }
    
    function generateQuestions() {
        quizQuestions = [];
        const types = Object.keys(data); // ["Argumentative", "Hortatory", "Discussion"]

        types.forEach(type => {
            // Buat pertanyaan dari Definisi
            quizQuestions.push({
                questionText: `What type of text has this definition: "${data[type].Definition}"`,
                options: types,
                correctAnswer: type
            });
            // Buat pertanyaan dari Tujuan (Purpose)
            quizQuestions.push({
                questionText: `What type of text has this purpose: "${data[type].Purpose}"`,
                options: types,
                correctAnswer: type
            });
        });
        
        // Acak urutan pertanyaan
        quizQuestions.sort(() => Math.random() - 0.5);
    }

    function displayQuestion() {
        if (currentQuestionIndex >= quizQuestions.length) {
            showResults();
            return;
        }

        const question = quizQuestions[currentQuestionIndex];
        let optionsHtml = "";
        
        // Acak urutan opsi jawaban
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(option => {
            optionsHtml += `<div class="quiz-option" id="option-${option}" onclick="checkAnswer('${option}', '${question.correctAnswer}')">${option}</div>`;
        });
        
        const questionHtml = `
            <div class="card">
                <h3>Pertanyaan ${currentQuestionIndex + 1} dari ${quizQuestions.length}</h3>
                <p>${question.questionText}</p>
                <div id="options-container">${optionsHtml}</div>
            </div>
        `;
        document.getElementById("content").innerHTML = questionHtml;
    }

    function checkAnswer(selectedAnswer, correctAnswer) {
      const optionsContainer = document.getElementById('options-container');
      optionsContainer.classList.add('disabled'); // Matikan klik setelah menjawab

      const selectedOptionDiv = document.getElementById(`option-${selectedAnswer}`);
      const correctOptionDiv = document.getElementById(`option-${correctAnswer}`);

      if (selectedAnswer === correctAnswer) {
        score++;
        selectedOptionDiv.classList.add('correct');
      } else {
        selectedOptionDiv.classList.add('incorrect');
        correctOptionDiv.classList.add('correct');
      }

      // Lanjut ke pertanyaan berikutnya setelah 1.5 detik
      setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
      }, 1500);
    }
    
    function showResults() {
        const resultHtml = `
            <div class="card">
                <h3>Kuis Selesai!</h3>
                <p>Skor Akhir Kamu:</p>
                <h2>${score} dari ${quizQuestions.length} Benar</h2>
                <div class="menu" onclick="startQuiz()">Ulangi Kuis</div>
            </div>
        `;
        document.getElementById("content").innerHTML = resultHtml;
    }

        // script.js
    function tampilkanNama() {
        // Mendapatkan nilai dari kolom input dengan ID 'namaInput'
        const nama = document.getElementById('namaInput').value;

        // Memeriksa apakah input tidak kosong
        if (nama) {
            // Menampilkan nama di console
            console.log("Nama yang dimasukkan: " + nama);

            // Menampilkan nama di elemen <p> dengan ID 'hasil'
            document.getElementById('hasil').innerText = "Halo, " + nama + "!";
        } else {
            alert('Silakan masukkan nama Anda terlebih dahulu!');
        }
    }