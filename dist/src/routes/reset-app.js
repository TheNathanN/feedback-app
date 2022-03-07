"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.reply.deleteMany();
    yield prisma.comment.deleteMany();
    yield prisma.feedback.deleteMany();
    const resetFeedback = yield prisma.feedback.createMany({
        data: [
            {
                id: 1,
                title: 'Add tags for solutions',
                category: 'Enhancement',
                upvotes: 112,
                status: 'Suggestion',
                description: 'Easier to search for solutions based on a specific stack.',
            },
            {
                id: 2,
                title: 'Add a dark theme option',
                category: 'Feature',
                upvotes: 99,
                status: 'Suggestion',
                description: 'It would help people with light sensitivities and who prefer dark mode.',
            },
            {
                id: 3,
                title: 'Q&A within the challenge hubs',
                category: 'Feature',
                upvotes: 65,
                status: 'Suggestion',
                description: 'Challenge-specific Q&A would make for easy reference.',
            },
            {
                id: 4,
                title: 'Add image/video upload to feedback',
                category: 'Enhancement',
                upvotes: 51,
                status: 'Suggestion',
                description: 'Images and screencasts can enhance comments on solutions.',
            },
            {
                id: 5,
                title: 'Ability to follow others',
                category: 'Feature',
                upvotes: 42,
                status: 'Suggestion',
                description: 'Stay updated on comments and solutions other people post.',
            },
            {
                id: 6,
                title: 'Preview images not loading',
                category: 'Bug',
                upvotes: 3,
                status: 'Suggestion',
                description: 'Challenge preview images are missing when you apply a filter.',
            },
            {
                id: 7,
                title: 'More comprehensive reports',
                category: 'Feature',
                upvotes: 123,
                status: 'Planned',
                description: 'It would be great to see a more detailed breakdown of solutions.',
            },
            {
                id: 8,
                title: 'Learning paths',
                category: 'Feature',
                upvotes: 28,
                status: 'Planned',
                description: 'Sequenced projects for different goals to help people improve.',
            },
            {
                id: 9,
                title: 'One-click portfolio generation',
                category: 'Feature',
                upvotes: 62,
                status: 'In-Progress',
                description: 'Add ability to create professional looking portfolio from profile.',
            },
            {
                id: 10,
                title: 'Bookmark challenges',
                category: 'Feature',
                upvotes: 31,
                status: 'In-Progress',
                description: 'Be able to bookmark challenges to take later on.',
            },
            {
                id: 11,
                title: 'Animated solution screenshots',
                category: 'Bug',
                upvotes: 9,
                status: 'In-Progress',
                description: "Screenshots of solutions with animations don't display correctly.",
            },
            {
                id: 12,
                title: 'Add micro-interactions',
                category: 'Enhancement',
                upvotes: 71,
                status: 'Live',
                description: 'Small animations at specific points can add delight.',
            },
        ],
    });
    const resetComments = yield prisma.comment.createMany({
        data: [
            {
                id: 1,
                content: 'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
                user_id: 2,
                feedback_id: 1,
            },
            {
                id: 2,
                content: 'Please use fun, color-coded labels to easily identify them at a glance',
                user_id: 3,
                feedback_id: 1,
            },
            {
                id: 3,
                content: "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device's dark mode turns on without the bright background it currently has.",
                user_id: 4,
                feedback_id: 2,
            },
            {
                id: 4,
                content: "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It's also quite a trend with modern apps and  apparently saves battery life.",
                user_id: 5,
                feedback_id: 2,
            },
            {
                id: 5,
                content: "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
                user_id: 8,
                feedback_id: 3,
            },
            {
                id: 6,
                content: "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
                user_id: 9,
                feedback_id: 4,
            },
            {
                id: 7,
                content: "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
                user_id: 10,
                feedback_id: 4,
            },
            {
                id: 8,
                content: 'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
                user_id: 11,
                feedback_id: 5,
            },
            {
                id: 9,
                content: "I've been saving the profile URLs of a few people and I check what they've been doing from time to time. Being able to follow them solves that",
                user_id: 12,
                feedback_id: 5,
            },
            {
                id: 10,
                content: 'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
                user_id: 11,
                feedback_id: 7,
            },
            {
                id: 11,
                content: "Yeah, this would be really good. I'd love to see deeper insights into my code!",
                user_id: 12,
                feedback_id: 7,
            },
            {
                id: 12,
                content: "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
                user_id: 8,
                feedback_id: 8,
            },
            {
                id: 13,
                content: "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
                user_id: 7,
                feedback_id: 9,
            },
            {
                id: 14,
                content: "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
                user_id: 2,
                feedback_id: 10,
            },
            {
                id: 15,
                content: "I'd love to see this! It always makes me so happy to see little details like these on websites.",
                user_id: 11,
                feedback_id: 12,
            },
        ],
    });
    const resetReplies = yield prisma.reply.createMany({
        data: [
            {
                id: 1,
                content: "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
                replying_to: 'hummingbird1',
                user_id: 6,
                comment_id: 4,
            },
            {
                id: 2,
                content: "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                replying_to: 'annev1990',
                user_id: 7,
                comment_id: 4,
            },
            {
                id: 3,
                content: "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they've done lately. I learn a lot by reading good developers' code.",
                replying_to: 'arlen_the_marlin',
                user_id: 1,
                comment_id: 8,
            },
            {
                id: 4,
                content: "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
                replying_to: 'arlen_the_marlin',
                user_id: 2,
                comment_id: 15,
            },
        ],
    });
    if (!resetFeedback || !resetComments || !resetReplies) {
        res.status(400).json({ message: 'There was a problem resetting the app' });
    }
    res.json({ message: 'App has successfully reset' });
}));
exports.default = router;
