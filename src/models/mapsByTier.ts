import { sortByProp } from '../helpers/arrayHelpers';

export const mapsByTier: { [key: number]: Array<{ name: string, img: string, tier: string, subrows?: { ownedBy?: Array<string> } }> } = {
    1: [
        {
            name: 'Desert Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/fa/Desert_Map_%28Blight%29_inventory_icon.png/16px-Desert_Map_%28Blight%29_inventory_icon.png?version=40261aa9412e5350aa18d69d4f1fe561',
            tier: '1',
        },
        {
            name: 'Haunted Mansion Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/af/Haunted_Mansion_Map_%28Blight%29_inventory_icon.png/16px-Haunted_Mansion_Map_%28Blight%29_inventory_icon.png?version=9036d69a9ec20b631e885ff49f6b47a3',
            tier: '1',
        },
        {
            name: 'Ivory Temple Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/11/Ivory_Temple_Map_%28Blight%29_inventory_icon.png/16px-Ivory_Temple_Map_%28Blight%29_inventory_icon.png?version=1026a2e49dfb913e271c26786fc6913f',
            tier: '1',
        },
        {
            name: 'Sulphur Vents Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/6c/Sulphur_Vents_Map_%28Blight%29_inventory_icon.png/16px-Sulphur_Vents_Map_%28Blight%29_inventory_icon.png?version=980f4a24cc9a3227ab50d22a31f2cf45',
            tier: '1',
        },
    ],
    2: [
        {
            name: 'Lookout Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/16/Lookout_Map_%28Blight%29_inventory_icon.png/16px-Lookout_Map_%28Blight%29_inventory_icon.png?version=58e751ed81691c3db2c5aee1117f01fd',
            tier: '2',
        },
        {
            name: 'Alleyways Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/21/Alleyways_Map_%28Blight%29_inventory_icon.png/16px-Alleyways_Map_%28Blight%29_inventory_icon.png?version=f1f56e8e313ea7982656d619c25a3e4e',
            tier: '2',
        },
        {
            name: 'Glacier Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b1/Glacier_Map_%28Blight%29_inventory_icon.png/16px-Glacier_Map_%28Blight%29_inventory_icon.png?version=aa69a134525ea071d6ab9868013b6ac0',
            tier: '2',
        },
        {
            name: 'Barrows Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0e/Barrows_Map_%28Blight%29_inventory_icon.png/16px-Barrows_Map_%28Blight%29_inventory_icon.png?version=0b6774bb49fa5fe0d03dcebdc5acfcb5',
            tier: '2',
        },
        {
            name: 'Thicket Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/41/Thicket_Map_%28Blight%29_inventory_icon.png/16px-Thicket_Map_%28Blight%29_inventory_icon.png?version=03ea2a475237d9a9e69c28f9f97c31da',
            tier: '2',
        },
        {
            name: 'Armoury Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/72/Armoury_Map_%28Blight%29_inventory_icon.png/16px-Armoury_Map_%28Blight%29_inventory_icon.png?version=8805826d33de921868b0b849b16b750f',
            tier: '2',
        },
    ],
    3: [
        {
            name: 'Arid Lake Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/fa/Arid_Lake_Map_%28Blight%29_inventory_icon.png/16px-Arid_Lake_Map_%28Blight%29_inventory_icon.png?version=2408984c2eeaae13b164963ccd219f2c',
            tier: '3',
        },
        {
            name: 'Flooded Mine Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/41/Flooded_Mine_Map_%28Blight%29_inventory_icon.png/16px-Flooded_Mine_Map_%28Blight%29_inventory_icon.png?version=9c3a5d3efd204f04f36214b0d1641fd8',
            tier: '3',
        },
        {
            name: 'Pen Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/89/Pen_Map_%28Blight%29_inventory_icon.png/16px-Pen_Map_%28Blight%29_inventory_icon.png?version=b9ab9f313ead6f9c1e543a4fd92df59a',
            tier: '3',
        },
        {
            name: 'Leyline Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/aa/Leyline_Map_%28Blight%29_inventory_icon.png/16px-Leyline_Map_%28Blight%29_inventory_icon.png?version=2e993d2e968bdf5b2b4af473894388eb',
            tier: '3',
        },
        {
            name: 'Relic Chambers Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9b/Relic_Chambers_Map_%28Blight%29_inventory_icon.png/16px-Relic_Chambers_Map_%28Blight%29_inventory_icon.png?version=48aceaa1aef13db1aac8cd4a9284822a',
            tier: '3',
        },
        {
            name: 'Ashen Wood Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/e/e0/Ashen_Wood_Map_%28Blight%29_inventory_icon.png/16px-Ashen_Wood_Map_%28Blight%29_inventory_icon.png?version=a9bafd09aa99749b2dc5cc59cde96ad6',
            tier: '3',
        },
        {
            name: 'Mausoleum Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/af/Mausoleum_Map_%28Blight%29_inventory_icon.png/16px-Mausoleum_Map_%28Blight%29_inventory_icon.png?version=207e1b444dc982af967acc3154af50b6',
            tier: '3',
        },
        {
            name: 'Wharf Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0d/Wharf_Map_%28Blight%29_inventory_icon.png/16px-Wharf_Map_%28Blight%29_inventory_icon.png?version=ba8cf7b4cf62263267cf8f943cf6db6e',
            tier: '3',
        },
        {
            name: 'Arachnid Tomb Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/e/e8/Arachnid_Tomb_Map_%28Blight%29_inventory_icon.png/16px-Arachnid_Tomb_Map_%28Blight%29_inventory_icon.png?version=0f1e04b94f67a7f08dae56a1517a4cd9',
            tier: '3',
        },
        {
            name: 'Pier Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/90/Pier_Map_%28Blight%29_inventory_icon.png/16px-Pier_Map_%28Blight%29_inventory_icon.png?version=df34cb87b0b61cadf5a04ef52a9c6e0e',
            tier: '3',
        },
    ],
    4: [
        {
            name: 'Beach Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/18/Beach_Map_%28Blight%29_inventory_icon.png/16px-Beach_Map_%28Blight%29_inventory_icon.png?version=f08181af0b391e84a0480752ca832b55',
            tier: '4',
        },
        {
            name: 'Cage Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b0/Cage_Map_%28Blight%29_inventory_icon.png/16px-Cage_Map_%28Blight%29_inventory_icon.png?version=34e8733205591b49422ba59707fc9a6d',
            tier: '4',
        },
        {
            name: 'Excavation Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/aa/Excavation_Map_%28Blight%29_inventory_icon.png/16px-Excavation_Map_%28Blight%29_inventory_icon.png?version=01a7524e9a5ce37dbfef97ecb323d633',
            tier: '4',
        },
        {
            name: 'City Square Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0e/City_Square_Map_%28Blight%29_inventory_icon.png/16px-City_Square_Map_%28Blight%29_inventory_icon.png?version=594524da04d0fcd12ad79b137953ec37',
            tier: '4',
        },
        {
            name: 'Grotto Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/73/Grotto_Map_%28Blight%29_inventory_icon.png/16px-Grotto_Map_%28Blight%29_inventory_icon.png?version=7dd52c719ef4fb7380770e47448eb1ac',
            tier: '4',
        },
        {
            name: 'Strand Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/f4/Strand_Map_%28Blight%29_inventory_icon.png/16px-Strand_Map_%28Blight%29_inventory_icon.png?version=0fa1a79b0b6573491842a3f6c7532257',
            tier: '4',
        },
        {
            name: 'Whakawairua Tuahu',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/67/Whakawairua_Tuahu_inventory_icon.png/16px-Whakawairua_Tuahu_inventory_icon.png?version=40179ba4d39db3377c8413d38c063798',
            tier: '4',
        },
        {
            name: 'Channel Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/5d/Channel_Map_%28Blight%29_inventory_icon.png/16px-Channel_Map_%28Blight%29_inventory_icon.png?version=cb6830038a0107e4f18ad2f4069d9e92',
            tier: '4',
        },
        {
            name: 'Fields Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/7a/Fields_Map_%28Blight%29_inventory_icon.png/16px-Fields_Map_%28Blight%29_inventory_icon.png?version=79fe77804d8e9a1f99bcce1d40c03d56',
            tier: '4',
        },
        {
            name: 'Cursed Crypt Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/30/Cursed_Crypt_Map_%28Blight%29_inventory_icon.png/16px-Cursed_Crypt_Map_%28Blight%29_inventory_icon.png?version=2c633e39b2be493ecee7f876eca2abed',
            tier: '4',
        },
        {
            name: 'The Coward\'s Trial',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/69/The_Coward%27s_Trial_inventory_icon.png/16px-The_Coward%27s_Trial_inventory_icon.png?version=c645fdb2a9baed46ebbd676992c63913',
            tier: '4',
        },
        {
            name: 'Crater Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/29/Crater_Map_%28Blight%29_inventory_icon.png/16px-Crater_Map_%28Blight%29_inventory_icon.png?version=2f71e4ea9914925bcdec3ff8605efd1e',
            tier: '4',
        },
    ],
    5: [
        {
            name: 'Marshes Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/a1/Marshes_Map_%28Blight%29_inventory_icon.png/16px-Marshes_Map_%28Blight%29_inventory_icon.png?version=2780b028fb29ef4bbd8f16af8782bc52',
            tier: '5',
        },
        {
            name: 'Arcade Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/cf/Arcade_Map_%28Blight%29_inventory_icon.png/16px-Arcade_Map_%28Blight%29_inventory_icon.png?version=ebf6abfbe9ff0993fe4b77d0f395448f',
            tier: '5',
        },
        {
            name: 'Burial Chambers Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/5f/Burial_Chambers_Map_%28Blight%29_inventory_icon.png/16px-Burial_Chambers_Map_%28Blight%29_inventory_icon.png?version=7fbbffbe3d25cac3bd9c5cc281da796c',
            tier: '5',
        },
        {
            name: 'Peninsula Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/3b/Peninsula_Map_%28Blight%29_inventory_icon.png/16px-Peninsula_Map_%28Blight%29_inventory_icon.png?version=bd3ef2cf5c97fea0800664c250bfe48d',
            tier: '5',
        },
        {
            name: 'Fungal Hollow Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c7/Fungal_Hollow_Map_%28Blight%29_inventory_icon.png/16px-Fungal_Hollow_Map_%28Blight%29_inventory_icon.png?version=9477e99c84a47dd1dcf9b7025f3b547f',
            tier: '5',
        },
        {
            name: 'Spider Lair Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/66/Spider_Lair_Map_%28Blight%29_inventory_icon.png/16px-Spider_Lair_Map_%28Blight%29_inventory_icon.png?version=f431853639ce069e61464dc3c5606723',
            tier: '5',
        },
        {
            name: 'The Beachhead',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c4/The_Beachhead_%28Low_Tier%29_inventory_icon.png/16px-The_Beachhead_%28Low_Tier%29_inventory_icon.png?version=4ecc61f302f582cb3151cb60abb1fe7d',
            tier: '5',
        },
        {
            name: 'Jungle Valley Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/79/Jungle_Valley_Map_%28Blight%29_inventory_icon.png/16px-Jungle_Valley_Map_%28Blight%29_inventory_icon.png?version=e7d42f9875c81f7fac766daf4f3591b7',
            tier: '5',
        },
        {
            name: 'Ramparts Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/28/Ramparts_Map_%28Blight%29_inventory_icon.png/16px-Ramparts_Map_%28Blight%29_inventory_icon.png?version=25c82b2cc489f251bde6d85d491d23d8',
            tier: '5',
        },
        {
            name: 'Tropical Island Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/2b/Tropical_Island_Map_%28Blight%29_inventory_icon.png/16px-Tropical_Island_Map_%28Blight%29_inventory_icon.png?version=8c6798f9afa0219177dea39e9d755396',
            tier: '5',
        },
        {
            name: 'Mesa Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/05/Mesa_Map_%28Blight%29_inventory_icon.png/16px-Mesa_Map_%28Blight%29_inventory_icon.png?version=23429d2b4a007fa49208a7892f9a807a',
            tier: '5',
        },
    ],
    6: [
        {
            name: 'Cells Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/ba/Cells_Map_%28Blight%29_inventory_icon.png/16px-Cells_Map_%28Blight%29_inventory_icon.png?version=d91e2b62ad40e19251c46bbe54fb355e',
            tier: '6',
        },
        {
            name: 'Ancient City Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9e/Ancient_City_Map_%28Blight%29_inventory_icon.png/16px-Ancient_City_Map_%28Blight%29_inventory_icon.png?version=24272dcc3cf611748c48efe3b8dd6421',
            tier: '6',
        },
        {
            name: 'Maze Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/1a/Maze_Map_%28Blight%29_inventory_icon.png/16px-Maze_Map_%28Blight%29_inventory_icon.png?version=23931e44ba00e12313840b54b11e3e1f',
            tier: '6',
        },
        {
            name: 'Atoll Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9b/Atoll_Map_%28Blight%29_inventory_icon.png/16px-Atoll_Map_%28Blight%29_inventory_icon.png?version=9241eeaba3ce62c885990fb6691133d6',
            tier: '6',
        },
        {
            name: 'Maelström of Chaos',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/a5/Maelstr%C3%B6m_of_Chaos_inventory_icon.png/16px-Maelstr%C3%B6m_of_Chaos_inventory_icon.png?version=adf5569ac8bc1e400fc2082504e31ee6',
            tier: '6',
        },
        {
            name: 'Phantasmagoria Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/57/Phantasmagoria_Map_%28Blight%29_inventory_icon.png/16px-Phantasmagoria_Map_%28Blight%29_inventory_icon.png?version=f291bded3c67ce62e3a28fec917bec40',
            tier: '6',
        },
        {
            name: 'Courtyard Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/28/Courtyard_Map_%28Blight%29_inventory_icon.png/16px-Courtyard_Map_%28Blight%29_inventory_icon.png?version=ac6e64bb4c89e6d131f197b4e80a8e0e',
            tier: '6',
        },
        {
            name: 'The Vinktar Square',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c0/The_Vinktar_Square_inventory_icon.png/16px-The_Vinktar_Square_inventory_icon.png?version=db31a0d7d182ab088036b90e3bed2a9b',
            tier: '6',
        },
        {
            name: 'Mud Geyser Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/38/Mud_Geyser_Map_%28Blight%29_inventory_icon.png/16px-Mud_Geyser_Map_%28Blight%29_inventory_icon.png?version=3b639caeeca96744ea1739d3c9cf3f33',
            tier: '6',
        },
        {
            name: 'Overgrown Ruin Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/26/Overgrown_Ruin_Map_%28Blight%29_inventory_icon.png/16px-Overgrown_Ruin_Map_%28Blight%29_inventory_icon.png?version=df8b10644b7d970b4a724f7c4023a532',
            tier: '6',
        },
        {
            name: 'Waste Pool Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/cf/Waste_Pool_Map_%28Blight%29_inventory_icon.png/16px-Waste_Pool_Map_%28Blight%29_inventory_icon.png?version=79355be770fb268177e722098e337bca',
            tier: '6',
        },
        {
            name: 'Primordial Pool Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/5d/Primordial_Pool_Map_%28Blight%29_inventory_icon.png/16px-Primordial_Pool_Map_%28Blight%29_inventory_icon.png?version=09fe818faaea1bdef9fd2b5dae8be8ce',
            tier: '6',
        },
        {
            name: 'Promenade Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/2a/Promenade_Map_%28Blight%29_inventory_icon.png/16px-Promenade_Map_%28Blight%29_inventory_icon.png?version=0dd668c1146b8029438ec8ffecee402e',
            tier: '6',
        },
        {
            name: 'Hall of Grandmasters',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0e/Hall_of_Grandmasters_inventory_icon.png/16px-Hall_of_Grandmasters_inventory_icon.png?version=7b0bd5c0935b90d7b2a3f1bcdb44902f',
            tier: '6',
        },
    ],
    7: [
        {
            name: 'Dungeon Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0b/Dungeon_Map_%28Blight%29_inventory_icon.png/16px-Dungeon_Map_%28Blight%29_inventory_icon.png?version=1ff064ef12c23d8cb2ea8b9ac9ab0dc9',
            tier: '7',
        },
        {
            name: 'Graveyard Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/bf/Graveyard_Map_%28Blight%29_inventory_icon.png/16px-Graveyard_Map_%28Blight%29_inventory_icon.png?version=2b56321b9a2fc1489b8f25df24be59fe',
            tier: '7',
        },
        {
            name: 'Conservatory Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/5a/Conservatory_Map_%28Blight%29_inventory_icon.png/16px-Conservatory_Map_%28Blight%29_inventory_icon.png?version=4716ce57c7f30a9148a277997d2a4c5d',
            tier: '7',
        },
        {
            name: 'Residence Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/5b/Residence_Map_%28Blight%29_inventory_icon.png/16px-Residence_Map_%28Blight%29_inventory_icon.png?version=1e1c4c14f83f4f327d0e3648807a1b58',
            tier: '7',
        },
        {
            name: 'Laboratory Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/f4/Laboratory_Map_%28Blight%29_inventory_icon.png/16px-Laboratory_Map_%28Blight%29_inventory_icon.png?version=6e086b92935c1d526dd1356d72f458cd',
            tier: '7',
        },
        {
            name: 'Arena Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/86/Arena_Map_%28Blight%29_inventory_icon.png/16px-Arena_Map_%28Blight%29_inventory_icon.png?version=603c7c747f690c93b8d88dc6bcc6d3e2',
            tier: '7',
        },
        {
            name: 'Vault Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/6d/Vault_Map_%28Blight%29_inventory_icon.png/16px-Vault_Map_%28Blight%29_inventory_icon.png?version=83447e9236159e0a444cd31f3184426c',
            tier: '7',
        },
        {
            name: 'Spider Forest Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/e/e7/Spider_Forest_Map_%28Blight%29_inventory_icon.png/16px-Spider_Forest_Map_%28Blight%29_inventory_icon.png?version=48f41a991a25c724dad143a40dc161a1',
            tier: '7',
        },
        {
            name: 'Waterways Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9a/Waterways_Map_%28Blight%29_inventory_icon.png/16px-Waterways_Map_%28Blight%29_inventory_icon.png?version=60eaa555c17baab79d7c519a605946e1',
            tier: '7',
        },
        {
            name: 'Overgrown Shrine Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/69/Overgrown_Shrine_Map_%28Blight%29_inventory_icon.png/16px-Overgrown_Shrine_Map_%28Blight%29_inventory_icon.png?version=9ee0761bf5ab3a8ed31a5604123fa25a',
            tier: '7',
        },
        {
            name: 'Acton\'s Nightmare',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9f/Acton%27s_Nightmare_inventory_icon.png/16px-Acton%27s_Nightmare_inventory_icon.png?version=0bf2ec4284bda36a5d81ddfdf34c06fb',
            tier: '7',
        },
        {
            name: 'Racecourse Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c0/Racecourse_Map_%28Blight%29_inventory_icon.png/16px-Racecourse_Map_%28Blight%29_inventory_icon.png?version=f6be66503b8ca5fa45ec8e6c5930a431',
            tier: '7',
        },
    ],
    8: [
            {
                name: 'Iceberg Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/a4/Iceberg_Map_%28Blight%29_inventory_icon.png/16px-Iceberg_Map_%28Blight%29_inventory_icon.png?version=a6a0fd54dc29b73f4fd91c0e16680666',
                tier: '8',
            },
            {
                name: 'Chateau Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/87/Chateau_Map_%28Blight%29_inventory_icon.png/16px-Chateau_Map_%28Blight%29_inventory_icon.png?version=49ec7288ff98c459847dae5d2542d2f1',
                tier: '8',
            },
            {
                name: 'The Perandus Manor',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0f/The_Perandus_Manor_inventory_icon.png/16px-The_Perandus_Manor_inventory_icon.png?version=5242e5d14be0c391ededb2fad838f694',
                tier: '8',
            },
            {
                name: 'Toxic Sewer Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/fa/Toxic_Sewer_Map_%28Blight%29_inventory_icon.png/16px-Toxic_Sewer_Map_%28Blight%29_inventory_icon.png?version=19f2078efd8f5a07c71f9ddda85f6543',
                tier: '8',
            },
            {
                name: 'Bone Crypt Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/28/Bone_Crypt_Map_%28Blight%29_inventory_icon.png/16px-Bone_Crypt_Map_%28Blight%29_inventory_icon.png?version=97791f805c6ddd46d41e59c9153cc2ea',
                tier: '8',
            },
            {
                name: 'Olmec\'s Sanctum',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/55/Olmec%27s_Sanctum_inventory_icon.png/16px-Olmec%27s_Sanctum_inventory_icon.png?version=9e178290fdfc329299ba7a3a6a6d7283',
                tier: '8',
            },
            {
                name: 'Dunes Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/74/Dunes_Map_%28Blight%29_inventory_icon.png/16px-Dunes_Map_%28Blight%29_inventory_icon.png?version=e012f4d556fac2c5be309fdbf7dfafba',
                tier: '8',
            },
            {
                name: 'Pillars of Arun',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0b/Pillars_of_Arun_inventory_icon.png/16px-Pillars_of_Arun_inventory_icon.png?version=97410e21b6585be4fa65a8cc9f160a9a',
                tier: '8',
            },
            {
                name: 'Untainted Paradise',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/09/Untainted_Paradise_inventory_icon.png/16px-Untainted_Paradise_inventory_icon.png?version=9a47e09548d641f13efc74fa4668de51',
                tier: '8',
            },
            {
                name: 'Estuary Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/4e/Estuary_Map_%28Blight%29_inventory_icon.png/16px-Estuary_Map_%28Blight%29_inventory_icon.png?version=355ed7885c46db126f4111ea51d514dc',
                tier: '8',
            },
            {
                name: 'Scriptorium Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/a8/Scriptorium_Map_%28Blight%29_inventory_icon.png/16px-Scriptorium_Map_%28Blight%29_inventory_icon.png?version=eb1d956e2bc2a5bd1539be778dcee8a7',
                tier: '8',
            },
            {
                name: 'Factory Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9c/Factory_Map_%28Blight%29_inventory_icon.png/16px-Factory_Map_%28Blight%29_inventory_icon.png?version=6773a1d65693ad87326b4d975e2025e2',
                tier: '8',
            },
            {
                name: 'Pit Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/49/Pit_Map_%28Blight%29_inventory_icon.png/16px-Pit_Map_%28Blight%29_inventory_icon.png?version=58caf75721faa417a21d7be95a4039a1',
                tier: '8',
            },
            {
                name: 'Necropolis Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0b/Necropolis_Map_%28Blight%29_inventory_icon.png/16px-Necropolis_Map_%28Blight%29_inventory_icon.png?version=9c9c98c78f2e7f9a206e1b7316671a1d',
                tier: '8',
            },
            {
                name: 'Death and Taxes',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/f8/Death_and_Taxes_inventory_icon.png/16px-Death_and_Taxes_inventory_icon.png?version=6e828082463a41ff55757394420effc3',
                tier: '8',
            },
            {
                name: 'Ghetto Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b1/Ghetto_Map_%28Blight%29_inventory_icon.png/16px-Ghetto_Map_%28Blight%29_inventory_icon.png?version=63da074ce3df32ae317bf118e25745c8',
                tier: '8',
            },
        ],
    9: [
            {
                name: 'Port Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/4a/Port_Map_%28Blight%29_inventory_icon.png/16px-Port_Map_%28Blight%29_inventory_icon.png?version=a149cb78bbda143874608a435674191e',
                tier: '9',
            },
            {
                name: 'Lighthouse Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/34/Lighthouse_Map_%28Blight%29_inventory_icon.png/16px-Lighthouse_Map_%28Blight%29_inventory_icon.png?version=f96d2147f28cd4701615a99852e782a4',
                tier: '9',
            },
            {
                name: 'Underground Sea Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/64/Underground_Sea_Map_%28Blight%29_inventory_icon.png/16px-Underground_Sea_Map_%28Blight%29_inventory_icon.png?version=33426857cebc2c16a9ba583e635cae08',
                tier: '9',
            },
            {
                name: 'Oba\'s Cursed Trove',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0c/Oba%27s_Cursed_Trove_inventory_icon.png/16px-Oba%27s_Cursed_Trove_inventory_icon.png?version=3eae0971c8c51a729d98c512a0bffaed',
                tier: '9',
            },
            {
                name: 'Arachnid Nest Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/83/Arachnid_Nest_Map_%28Blight%29_inventory_icon.png/16px-Arachnid_Nest_Map_%28Blight%29_inventory_icon.png?version=8473fc1bb914e8064d6b24e3a9189e1a',
                tier: '9',
            },
            {
                name: 'Underground River Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/74/Underground_River_Map_%28Blight%29_inventory_icon.png/16px-Underground_River_Map_%28Blight%29_inventory_icon.png?version=9abd3028b5da1abaa254fc5df6cc96ce',
                tier: '9',
            },
            {
                name: 'Caer Blaidd, Wolfpack\'s Den',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/02/Caer_Blaidd%2C_Wolfpack%27s_Den_inventory_icon.png/16px-Caer_Blaidd%2C_Wolfpack%27s_Den_inventory_icon.png?version=0bd02cb007ffd3c3030b5452615b1b8e',
                tier: '9',
            },
            {
                name: 'Mineral Pools Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/65/Mineral_Pools_Map_%28Blight%29_inventory_icon.png/16px-Mineral_Pools_Map_%28Blight%29_inventory_icon.png?version=9adb72c965663abde637080a2635d3cf',
                tier: '9',
            },
            {
                name: 'Shore Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/36/Shore_Map_%28Blight%29_inventory_icon.png/16px-Shore_Map_%28Blight%29_inventory_icon.png?version=d99b1a3982cc777642cf2fa54d1af37d',
                tier: '9',
            },
            {
                name: 'Mao Kun',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/68/Mao_Kun_inventory_icon.png/16px-Mao_Kun_inventory_icon.png?version=bcf7deae4bd2e9aa7c835f337c8b90c7',
                tier: '9',
            },
            {
                name: 'Moon Temple Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b5/Moon_Temple_Map_%28Blight%29_inventory_icon.png/16px-Moon_Temple_Map_%28Blight%29_inventory_icon.png?version=392b54ccf7f5e4c79ee0bc6e677e0925',
                tier: '9',
            },
            {
                name: 'The Twilight Temple',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/27/The_Twilight_Temple_inventory_icon.png/16px-The_Twilight_Temple_inventory_icon.png?version=9e6fa81fd6edefdf042557c0076d1fe5',
                tier: '9',
            },
            {
                name: 'Castle Ruins Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/8a/Castle_Ruins_Map_%28Blight%29_inventory_icon.png/16px-Castle_Ruins_Map_%28Blight%29_inventory_icon.png?version=fae39a0f6be2d56dfdf1bbeafaef25c6',
                tier: '9',
            },
            {
                name: 'Villa Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/43/Villa_Map_%28Blight%29_inventory_icon.png/16px-Villa_Map_%28Blight%29_inventory_icon.png?version=3e860e32fe7a4782d0f8ec8432c0d457',
                tier: '9',
            },
            {
                name: 'Arsenal Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/61/Arsenal_Map_%28Blight%29_inventory_icon.png/16px-Arsenal_Map_%28Blight%29_inventory_icon.png?version=83fcc3ba11ea65fcfd9e976e70483729',
                tier: '9',
            },
        ],
    10: [
        {
            name: 'Volcano Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/62/Volcano_Map_%28Blight%29_inventory_icon.png/16px-Volcano_Map_%28Blight%29_inventory_icon.png?version=ccfe7fca8c68ac8f4dff267d9b671be0',
            tier: '10',
        },
        {
            name: 'Academy Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/66/Academy_Map_%28Blight%29_inventory_icon.png/16px-Academy_Map_%28Blight%29_inventory_icon.png?version=4cee93da296a8223e807da3c86548a1f',
            tier: '10',
        },
        {
            name: 'Bazaar Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9e/Bazaar_Map_%28Blight%29_inventory_icon.png/16px-Bazaar_Map_%28Blight%29_inventory_icon.png?version=1a2997fa832b4e5cf0835a0b0eccea0f',
            tier: '10',
        },
        {
            name: 'Coral Ruins Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/e/eb/Coral_Ruins_Map_%28Blight%29_inventory_icon.png/16px-Coral_Ruins_Map_%28Blight%29_inventory_icon.png?version=d8362f8bdb811e3b087caa7809ca5643',
            tier: '10',
        },
        {
            name: 'Lava Chamber Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/9e/Lava_Chamber_Map_%28Blight%29_inventory_icon.png/16px-Lava_Chamber_Map_%28Blight%29_inventory_icon.png?version=f22e4669a1881d2039f63fa7f8d39fb2',
            tier: '10',
        },
        {
            name: 'Geode Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/77/Geode_Map_%28Blight%29_inventory_icon.png/16px-Geode_Map_%28Blight%29_inventory_icon.png?version=a23ab5f4fd509a804aac72cd25798d72',
            tier: '10',
        },
        {
            name: 'Plateau Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/81/Plateau_Map_%28Blight%29_inventory_icon.png/16px-Plateau_Map_%28Blight%29_inventory_icon.png?version=bdfb7aa5101b7340371957c36f8a50b2',
            tier: '10',
        },
        {
            name: 'Sepulchre Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/57/Sepulchre_Map_%28Blight%29_inventory_icon.png/16px-Sepulchre_Map_%28Blight%29_inventory_icon.png?version=af96be2709437db568dc0c66ce4acabb',
            tier: '10',
        },
        {
            name: 'Temple Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/3e/Temple_Map_%28Blight%29_inventory_icon.png/16px-Temple_Map_%28Blight%29_inventory_icon.png?version=7fb982f95a126877dae76f22ddf3a528',
            tier: '10',
        },
        {
            name: 'Poorjoy\'s Asylum',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/08/Poorjoy%27s_Asylum_inventory_icon.png/16px-Poorjoy%27s_Asylum_inventory_icon.png?version=50a7413e8a1c54966daf15af7c8f2e31',
            tier: '10',
        },
        {
            name: 'Bog Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/bc/Bog_Map_%28Blight%29_inventory_icon.png/16px-Bog_Map_%28Blight%29_inventory_icon.png?version=dc25e2f4fe1b294670198fcf200f681c',
            tier: '10',
        },
        {
            name: 'The Beachhead',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/ba/The_Beachhead_%28Mid_Tier%29_inventory_icon.png/16px-The_Beachhead_%28Mid_Tier%29_inventory_icon.png?version=13b6862bd644fe5e9315eabbb7418eac',
            tier: '10',
        },
    ],
    11: [
        {
            name: 'Gardens Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/52/Gardens_Map_%28Blight%29_inventory_icon.png/16px-Gardens_Map_%28Blight%29_inventory_icon.png?version=cbbf4dbb00dbe90b2def5f264d29bb18',
            tier: '11',
        },
        {
            name: 'Infested Valley Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/13/Infested_Valley_Map_%28Blight%29_inventory_icon.png/16px-Infested_Valley_Map_%28Blight%29_inventory_icon.png?version=b8e4f69af8ac2637b0f263a605ecd20a',
            tier: '11',
        },
        {
            name: 'Museum Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/6b/Museum_Map_%28Blight%29_inventory_icon.png/16px-Museum_Map_%28Blight%29_inventory_icon.png?version=7dd48f141fca7f81f73c711579a05bb1',
            tier: '11',
        },
        {
            name: 'The Putrid Cloister',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/81/The_Putrid_Cloister_inventory_icon.png/16px-The_Putrid_Cloister_inventory_icon.png?version=d7e8fb30c25a6c24d6bd5f5ce3050d2b',
            tier: '11',
        },
        {
            name: 'Precinct Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/5e/Precinct_Map_%28Blight%29_inventory_icon.png/16px-Precinct_Map_%28Blight%29_inventory_icon.png?version=287bfe41d704dc03639a7462fa2f1ca2',
            tier: '11',
        },
        {
            name: 'Siege Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b7/Siege_Map_%28Blight%29_inventory_icon.png/16px-Siege_Map_%28Blight%29_inventory_icon.png?version=a859c250ce8e5ecbb2d5e8eadc105dbd',
            tier: '11',
        },
        {
            name: 'Colonnade Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/d/da/Colonnade_Map_%28Blight%29_inventory_icon.png/16px-Colonnade_Map_%28Blight%29_inventory_icon.png?version=25e92c845724bd7744dfa63b8b3ef0fa',
            tier: '11',
        },
        {
            name: 'Lair Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/19/Lair_Map_%28Blight%29_inventory_icon.png/16px-Lair_Map_%28Blight%29_inventory_icon.png?version=e0983a85f3a2f26177803f157e07678e',
            tier: '11',
        },
        {
            name: 'Malformation Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/90/Malformation_Map_%28Blight%29_inventory_icon.png/16px-Malformation_Map_%28Blight%29_inventory_icon.png?version=ee229c4ee7c6912b6f3f38d6fa900f21',
            tier: '11',
        },
        {
            name: 'Crimson Temple Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/11/Crimson_Temple_Map_%28Blight%29_inventory_icon.png/16px-Crimson_Temple_Map_%28Blight%29_inventory_icon.png?version=7201e94c2ce6e265ccea492cca6960ab',
            tier: '11',
        },
        {
            name: 'Dig Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b5/Dig_Map_%28Blight%29_inventory_icon.png/16px-Dig_Map_%28Blight%29_inventory_icon.png?version=d2886ea1e24e1c8b50e6ca937fd6a1d8',
            tier: '11',
        },
    ],
    12: [
        {
            name: 'Canyon Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b1/Canyon_Map_%28Blight%29_inventory_icon.png/16px-Canyon_Map_%28Blight%29_inventory_icon.png?version=0dc65c9550dabb72c503ce676c1478a9',
            tier: '12',
        },
        {
            name: 'Cemetery Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/0c/Cemetery_Map_%28Blight%29_inventory_icon.png/16px-Cemetery_Map_%28Blight%29_inventory_icon.png?version=8fe424e66559ed49c4be4c90b167ad5f',
            tier: '12',
        },
        {
            name: 'Hallowed Ground',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/19/Hallowed_Ground_inventory_icon.png/16px-Hallowed_Ground_inventory_icon.png?version=8380b6373913d109db62f01a31191320',
            tier: '12',
        },
        {
            name: 'Vaal Pyramid Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/1f/Vaal_Pyramid_Map_%28Blight%29_inventory_icon.png/16px-Vaal_Pyramid_Map_%28Blight%29_inventory_icon.png?version=3ad8dc8481ac8fcd15109b36ff514953',
            tier: '12',
        },
        {
            name: 'Vaults of Atziri',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b7/Vaults_of_Atziri_inventory_icon.png/16px-Vaults_of_Atziri_inventory_icon.png?version=80b5d273c49c47a461d6489c0a5f62c0',
            tier: '12',
        },
        {
            name: 'Shipyard Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/22/Shipyard_Map_%28Blight%29_inventory_icon.png/16px-Shipyard_Map_%28Blight%29_inventory_icon.png?version=6cf352b5f83612442c55380b4b565f89',
            tier: '12',
        },
        {
            name: 'Core Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/5/53/Core_Map_%28Blight%29_inventory_icon.png/16px-Core_Map_%28Blight%29_inventory_icon.png?version=3bcba4ebcf9e612d98a436cb2fcb8f75',
            tier: '12',
        },
        {
            name: 'Park Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/9/93/Park_Map_%28Blight%29_inventory_icon.png/16px-Park_Map_%28Blight%29_inventory_icon.png?version=d10227ce2af6104470260b32cd411e51',
            tier: '12',
        },
        {
            name: 'Colosseum Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/6d/Colosseum_Map_%28Blight%29_inventory_icon.png/16px-Colosseum_Map_%28Blight%29_inventory_icon.png?version=c49789383f9a460064bbf81daf1bfe03',
            tier: '12',
        },
        {
            name: 'Carcass Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/1a/Carcass_Map_%28Blight%29_inventory_icon.png/16px-Carcass_Map_%28Blight%29_inventory_icon.png?version=2a550cf2e8067cab53b8e808364a8549',
            tier: '12',
        },
        {
            name: 'Lava Lake Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/f6/Lava_Lake_Map_%28Blight%29_inventory_icon.png/16px-Lava_Lake_Map_%28Blight%29_inventory_icon.png?version=43bf8c3eef87a3eca2f6809de063acc4',
            tier: '12',
        },
    ],
    13: [
        {
            name: 'Tower Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c6/Tower_Map_%28Blight%29_inventory_icon.png/16px-Tower_Map_%28Blight%29_inventory_icon.png?version=4a6debf8a35f9d4a55f746557d677bab',
            tier: '13',
        },
        {
            name: 'Belfry Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/36/Belfry_Map_%28Blight%29_inventory_icon.png/16px-Belfry_Map_%28Blight%29_inventory_icon.png?version=a7496a3beef2b1bfaafce0c4b833cad1',
            tier: '13',
        },
        {
            name: 'Coves Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/d/d0/Coves_Map_%28Blight%29_inventory_icon.png/16px-Coves_Map_%28Blight%29_inventory_icon.png?version=28bcd19795242cb58250070cf24e064b',
            tier: '13',
        },
        {
            name: 'Defiled Cathedral Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c7/Defiled_Cathedral_Map_%28Blight%29_inventory_icon.png/16px-Defiled_Cathedral_Map_%28Blight%29_inventory_icon.png?version=2245a1f51b90d32a1919d8e7b07837fd',
            tier: '13',
        },
        {
            name: 'Shrine Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/a9/Shrine_Map_%28Blight%29_inventory_icon.png/16px-Shrine_Map_%28Blight%29_inventory_icon.png?version=8eb09de656b8bdd4594a523f73e638ce',
            tier: '13',
        },
        {
            name: 'Terrace Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/e/e6/Terrace_Map_%28Blight%29_inventory_icon.png/16px-Terrace_Map_%28Blight%29_inventory_icon.png?version=fef3a4a4c8a09598014a20b3ec6784c7',
            tier: '13',
        },
        {
            name: 'Plaza Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/69/Plaza_Map_%28Blight%29_inventory_icon.png/16px-Plaza_Map_%28Blight%29_inventory_icon.png?version=14a04817897a00206b1b92c2bc969d64',
            tier: '13',
        },
        {
            name: 'Reef Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/82/Reef_Map_%28Blight%29_inventory_icon.png/16px-Reef_Map_%28Blight%29_inventory_icon.png?version=8e75a8198b1f4d476895171d147d473c',
            tier: '13',
        },
        {
            name: 'Sunken City Map',
            img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/a/aa/Sunken_City_Map_%28Blight%29_inventory_icon.png/16px-Sunken_City_Map_%28Blight%29_inventory_icon.png?version=d7daf970915bd445a67d386bce9a9a5d',
            tier: '13',
        },
    ],
    14: [
            {
                name: 'Courthouse Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/2/28/Courthouse_Map_%28Blight%29_inventory_icon.png/16px-Courthouse_Map_%28Blight%29_inventory_icon.png?version=73a1656e3ea1a56a41dec167cf28de63',
                tier: '14',
            },
            {
                name: 'Orchard Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/02/Orchard_Map_%28Blight%29_inventory_icon.png/16px-Orchard_Map_%28Blight%29_inventory_icon.png?version=33c1a68927763d4895b78a85ff2219e1',
                tier: '14',
            },
            {
                name: 'Wasteland Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b8/Wasteland_Map_%28Blight%29_inventory_icon.png/16px-Wasteland_Map_%28Blight%29_inventory_icon.png?version=ece9193a611282b5553b145c34d789f2',
                tier: '14',
            },
            {
                name: 'Crystal Ore Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/34/Crystal_Ore_Map_%28Blight%29_inventory_icon.png/16px-Crystal_Ore_Map_%28Blight%29_inventory_icon.png?version=64b18f2c2ae03a4df5273faa84511d6c',
                tier: '14',
            },
            {
                name: 'Primordial Blocks Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/bf/Primordial_Blocks_Map_%28Blight%29_inventory_icon.png/16px-Primordial_Blocks_Map_%28Blight%29_inventory_icon.png?version=5b10ce9fffdaebf16211428a8c83fc26',
                tier: '14',
            },
            {
                name: 'Dark Forest Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c8/Dark_Forest_Map_%28Blight%29_inventory_icon.png/16px-Dark_Forest_Map_%28Blight%29_inventory_icon.png?version=48adf5da8e23a6f15b3176dba62c18ec',
                tier: '14',
            },
            {
                name: 'Basilica Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/c/c0/Basilica_Map_%28Blight%29_inventory_icon.png/16px-Basilica_Map_%28Blight%29_inventory_icon.png?version=108b092ebee423533c36aab6d079ae06',
                tier: '14',
            },
        ],
    15: [
            {
                name: 'Summit Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/6/6d/Summit_Map_%28Blight%29_inventory_icon.png/16px-Summit_Map_%28Blight%29_inventory_icon.png?version=f6981bff0e6dad141f926fae788e7d63',
                tier: '15',
            },
            {
                name: 'Caldera Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/4/48/Caldera_Map_%28Blight%29_inventory_icon.png/16px-Caldera_Map_%28Blight%29_inventory_icon.png?version=a649abc9c6eef90f09a9242dcc37915d',
                tier: '15',
            },
            {
                name: 'Desert Spring Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/1a/Desert_Spring_Map_%28Blight%29_inventory_icon.png/16px-Desert_Spring_Map_%28Blight%29_inventory_icon.png?version=f9b0d2ec4e4ceba4402fd56c3c55bfe1',
                tier: '15',
            },
            {
                name: 'Acid Caverns Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/b/b4/Acid_Caverns_Map_%28Blight%29_inventory_icon.png/16px-Acid_Caverns_Map_%28Blight%29_inventory_icon.png?version=c66ee56be2ba8b845a2507b9923997a3',
                tier: '15',
            },
            {
                name: 'Palace Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/f/f6/Palace_Map_%28Blight%29_inventory_icon.png/16px-Palace_Map_%28Blight%29_inventory_icon.png?version=88ba2d241fe4bdb17689ce8259f08f5e',
                tier: '15',
            },
            {
                name: 'The Beachhead',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/0/02/The_Beachhead_%28High_Tier%29_inventory_icon.png/16px-The_Beachhead_%28High_Tier%29_inventory_icon.png?version=ebd78768c67c30a21a3b1278f744f52b',
                tier: '15',
            },
        ],
    16: [
            {
                name: 'Forge of the Phoenix Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/7/77/Forge_of_the_Phoenix_Map_%28Blight%29_inventory_icon.png/16px-Forge_of_the_Phoenix_Map_%28Blight%29_inventory_icon.png?version=28e4982238abebe88f94bac03cd56bfc',
                tier: '16',
            },
            {
                name: 'Lair of the Hydra Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/1/18/Lair_of_the_Hydra_Map_%28Blight%29_inventory_icon.png/16px-Lair_of_the_Hydra_Map_%28Blight%29_inventory_icon.png?version=dd42d4233e7f2fb847cda5bbc55aaca5',
                tier: '16',
            },
            {
                name: 'Maze of the Minotaur Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/3/3e/Maze_of_the_Minotaur_Map_%28Blight%29_inventory_icon.png/16px-Maze_of_the_Minotaur_Map_%28Blight%29_inventory_icon.png?version=ad7b1275da6a8c4ac078e4b3b46d1b45',
                tier: '16',
            },
            {
                name: 'Pit of the Chimera Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/8/83/Pit_of_the_Chimera_Map_%28Blight%29_inventory_icon.png/16px-Pit_of_the_Chimera_Map_%28Blight%29_inventory_icon.png?version=e6700ca66d491a4652ca198942fdac63',
                tier: '16',
            },
            {
                name: 'Vaal Temple Map',
                img: 'https://gamepedia.cursecdn.com/pathofexile_gamepedia/thumb/d/d6/Vaal_Temple_Map_%28Blight%29_inventory_icon.png/16px-Vaal_Temple_Map_%28Blight%29_inventory_icon.png?version=31af314564b50a032f68d7106b617d51',
                tier: '16',
            },
        ],
};

export const mapListByTier = (() => {
    const list = [];

    for (let tier in mapsByTier) {
        list.push(...mapsByTier[tier])
    }

    return list.sort(sortByProp('tier'));
})();
