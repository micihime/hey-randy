import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Randy" },
    { name: "description", content: "Welcome to Randy!" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>Key Features</h1>
      <section>
        <h2>Key Features</h2>
        <p>
          Your app, Randy, has a versatile design that can be applied to a wide
          range of use-cases beyond mindfulness and being present. Here are some
          other potential use-cases: 1. Productivity and Work Habits Pomodoro
          Technique: Remind users to take breaks or return to work at random
          intervals within a set timeframe, helping them stay productive. Task
          Randomizer: Help users complete tasks by randomly reminding them of
          different tasks they&apos;ve input, encouraging variety and preventing
          burnout. 2. Physical Health and Fitness Stretching Reminders: Remind
          users to stand up, stretch, or do light exercises at random intervals,
          especially useful for those with sedentary jobs. Hydration Alerts:
          Randomly remind users to drink water throughout the day to ensure they
          stay hydrated. Posture Check: Encourage better posture by reminding
          users to sit up straight or adjust their seating. 3. Mental Health and
          Wellbeing Affirmations: Send random positive affirmations or self-care
          reminders to uplift the user&apos;s mood. Breathing Exercises: Prompt users
          to do breathing exercises to reduce stress and improve focus.
          Gratitude Practice: Remind users to note down something they&apos;re
          grateful for at random times. 4. Learning and Skill Development
          Language Learning: Remind users to practice vocabulary or phrases of a
          new language they are learning. Memory Training: Send random reminders
          to recall certain information or test their memory on specific topics.
          Creative Prompts: Randomly prompt users to engage in creative
          exercises like writing, drawing, or brainstorming. 5. Healthy Habits
          Formation Healthy Eating: Remind users to make healthier food choices,
          like eating a piece of fruit or avoiding sugary snacks. Mindful
          Eating: Encourage users to practice mindful eating, paying attention
          to the taste, texture, and enjoyment of their food. Sleep Hygiene:
          Remind users to start winding down at night or to avoid screens before
          bed. 6. Social Connections Random Acts of Kindness: Prompt users to
          perform a kind action, like sending a thoughtful message to a friend
          or helping someone out. Check-In Reminders: Encourage users to reach
          out to loved ones or friends they haven&apos;t talked to in a while. 7.
          Personal Development Goal Reminders: Remind users of their personal
          goals at random intervals to keep them motivated. Reflection Prompts:
          Encourage users to reflect on their day, their goals, or their
          emotions. Values Check: Randomly remind users to align their actions
          with their core values. 8. Hobbies and Leisure Reading Reminders:
          Encourage users to read a few pages of a book, helping them make
          progress on their reading goals. Hobby Engagement: Random reminders to
          engage in hobbies like playing an instrument, knitting, or gardening.
          9. Time Management Random Timeboxing: Randomly assign short time slots
          to focus on specific tasks or projects. Attention Management: Remind
          users to switch focus or take a break to prevent fatigue and maintain
          productivity. 10. Environmental Awareness Energy Saving Prompts:
          Remind users to turn off lights, unplug devices, or reduce water
          usage. Sustainability Actions: Encourage small, random acts of
          environmental responsibility, like picking up trash or recycling. 11.
          Mindful Technology Use Screen Breaks: Remind users to take a break
          from screens to prevent digital eye strain and improve wellbeing.
          Digital Detox: Randomly encourage users to disconnect from their
          devices for short periods.
        </p>
      </section>
    </main>
  );
}
